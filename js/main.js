import { products } from './products.js';
import { search } from './search.js';
import { auth } from './auth.js';
import { wishlist } from './wishlist.js';
import { cart } from './cart.js';

// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Set up navigation
    setupNavigation();
    
    // Set up checkout form
    setupCheckoutForm();
});

function initializeApp() {
    // Render products on home page
    renderProducts();
    
    // Show home page by default
    navigateToPage('home');
}

function setupNavigation() {
    // Add click event listeners to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log(`Navigated to: ${pageName}`); // Debug log
        
        // Update page title
        switch(pageName) {
            case 'home':
                document.title = 'ShopMart - Your Premier Online Store';
                // Reset filters to default before rendering products
                search.currentFilters = {
                    search: '',
                    category: '',
                    sort: 'name-asc',
                    maxPrice: 400
                };
                search.applyFilters();
                break;
            case 'cart':
                document.title = 'Shopping Cart - ShopMart';
                cart.renderCartPage();
                break;
            case 'wishlist':
                document.title = 'My Wishlist - ShopMart';
                wishlist.renderWishlistPage();
                break;
            case 'checkout':
                document.title = 'Checkout - ShopMart';
                cart.renderOrderSummary();
                break;
            case 'success':
                document.title = 'Order Complete - ShopMart';
                break;
            case 'contact':
                document.title = 'Contact Us - ShopMart';
                break;
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        console.warn(`Page not found: ${pageName}`);
    }
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid || !products) return;
    
    // Use search functionality to render products
    search.renderFilteredProducts();
}

function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productDetail = document.getElementById('product-detail');
    if (!productDetail) return;
    
    // Render product gallery
    const images = product.images || [product.image];
    const galleryHTML = `
        <div class="product-gallery">
            <img src="${images[0]}" alt="${product.name}" class="main-image" id="main-image">
            ${images.length > 1 ? `
                <div class="thumbnail-images">
                    ${images.map((img, index) => `
                        <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                             onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;

    // Render product variants
    let variantsHTML = '';
    if (product.variants) {
        variantsHTML = '<div class="product-variants">';
        Object.keys(product.variants).forEach(variantType => {
            variantsHTML += `
                <div class="variant-group">
                    <h4>${variantType.charAt(0).toUpperCase() + variantType.slice(1)}:</h4>
                    <div class="variant-options">
                        ${product.variants[variantType].map(option => `
                            <button class="variant-option" onclick="selectVariant(this, '${variantType}', '${option}')">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        variantsHTML += '</div>';
    }

    productDetail.innerHTML = `
        ${galleryHTML}
        <div class="product-info">
            <h1>${product.name}</h1>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="product-description">
                <p>${product.description}</p>
            </div>
            ${variantsHTML}
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="add-to-wishlist-btn" onclick="addToWishlist(${product.id})">
                    ❤️ Wishlist
                </button>
            </div>
        </div>
    `;
    
    // Render reviews
    reviews.renderProductReviews(productId);
    
    // Render recommendations
    renderRecommendations(productId);
    
    document.title = `${product.name} - ShopMart`;
    navigateToPage('product');
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

function selectVariant(button, variantType, option) {
    // Remove active class from siblings
    button.parentElement.querySelectorAll('.variant-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add active class to selected option
    button.classList.add('selected');
}

function renderRecommendations(productId) {
    const recommendationsContainer = document.getElementById('recommendations');
    if (!recommendationsContainer) return;
    
    const recommendations = search.getRecommendations(productId);
    
    if (recommendations.length === 0) {
        recommendationsContainer.innerHTML = '';
        return;
    }
    
    recommendationsContainer.innerHTML = `
        <h3>You May Also Like</h3>
        <div class="recommendations-grid">
            ${recommendations.map(product => `
                <div class="recommendation-card" onclick="showProduct(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="recommendation-image">
                    <div class="recommendation-name">${product.name}</div>
                    <div class="recommendation-price">$${product.price.toFixed(2)}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

function setupCheckoutForm() {
    const checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const formData = new FormData(checkoutForm);
        const formValid = validateCheckoutForm(formData);
        
        if (formValid) {
            // Process order
            processOrder();
        }
    });
    
    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Format expiry date input
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Format CVV input
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
}

function validateCheckoutForm(formData) {
    // Basic validation - in a real app, you'd have more comprehensive validation
    const requiredFields = ['fullName', 'email', 'address', 'city', 'zipCode', 'cardNumber', 'expiryDate', 'cvv'];
    
    for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.focus();
            return false;
        } else {
            input.style.borderColor = '#d1d5db';
        }
    }
    
    // Validate email format
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#ef4444';
        emailInput.focus();
        return false;
    }
    
    return true;
}

function processOrder() {
    // Simulate order processing
    const checkoutBtn = document.querySelector('.checkout-btn');
    const originalText = checkoutBtn.textContent;
    
    checkoutBtn.textContent = 'Processing...';
    checkoutBtn.disabled = true;
    
    setTimeout(() => {
        // Clear cart
        cart.clear();
        
        // Navigate to success page
        navigateToPage('success');
        
        // Reset button
        checkoutBtn.textContent = originalText;
        checkoutBtn.disabled = false;
    }, 2000);
}

// Utility functions for responsive behavior
function handleResize() {
    // Handle any responsive adjustments needed
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile adjustments
        adjustForMobile();
    } else {
        // Desktop adjustments
        adjustForDesktop();
    }
}

function adjustForMobile() {
    // Mobile-specific adjustments
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        // Adjust cart item layout for mobile
        const controls = item.querySelector('.quantity-controls');
        const removeBtn = item.querySelector('.remove-btn');
        const total = item.querySelector('.item-total');
        
        if (controls && removeBtn && total) {
            // Create mobile controls container if it doesn't exist
            let mobileControls = item.querySelector('.cart-item-controls');
            if (!mobileControls) {
                mobileControls = document.createElement('div');
                mobileControls.className = 'cart-item-controls';
                mobileControls.appendChild(controls);
                mobileControls.appendChild(total);
                mobileControls.appendChild(removeBtn);
                item.appendChild(mobileControls);
            }
        }
    });
}

function adjustForDesktop() {
    // Desktop-specific adjustments
    // Remove mobile controls if they exist
    const mobileControls = document.querySelectorAll('.cart-item-controls');
    mobileControls.forEach(control => {
        const parent = control.parentElement;
        while (control.firstChild) {
            parent.appendChild(control.firstChild);
        }
        control.remove();
    });
}

// Add resize event listener
window.addEventListener('resize', handleResize);

// Call once on load
handleResize();

window.navigateToPage = navigateToPage;
window.showLoginModal = showLoginModal;
window.showRegisterModal = showRegisterModal;
window.logout = logout;
window.closeModal = closeModal;