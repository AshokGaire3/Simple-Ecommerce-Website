import { auth } from './auth.js';

// Wishlist management functionality
export class Wishlist {
    constructor() {
        this.items = this.loadFromStorage();
        this.updateWishlistCount();
    }

    addItem(product) {
        if (!auth.isLoggedIn()) {
            auth.showNotification('Please login to add items to wishlist', 'error');
            showLoginModal();
            return false;
        }

        const existingItem = this.items.find(item => item.id === product.id);
        
        if (!existingItem) {
            this.items.push(product);
            this.saveToStorage();
            this.updateWishlistCount();
            this.showNotification(`${product.name} added to wishlist!`);
            return true;
        } else {
            this.showNotification(`${product.name} is already in your wishlist`, 'error');
            return false;
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateWishlistCount();
        this.renderWishlistPage();
    }

    isInWishlist(productId) {
        return this.items.some(item => item.id === productId);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateWishlistCount();
    }

    getItemCount() {
        return this.items.length;
    }

    saveToStorage() {
        const userId = auth.isLoggedIn() ? auth.getCurrentUser().id : 'guest';
        localStorage.setItem(`wishlist_${userId}`, JSON.stringify(this.items));
    }

    loadFromStorage() {
        const userId = auth.isLoggedIn() ? auth.getCurrentUser().id : 'guest';
        const saved = localStorage.getItem(`wishlist_${userId}`);
        return saved ? JSON.parse(saved) : [];
    }

    updateWishlistCount() {
        const wishlistCountElement = document.querySelector('.wishlist-count');
        if (wishlistCountElement) {
            wishlistCountElement.textContent = this.getItemCount();
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? '#16a34a' : '#ef4444';
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    renderWishlistPage() {
        const wishlistContent = document.getElementById('wishlist-content');
        if (!wishlistContent) return;

        if (!auth.isLoggedIn()) {
            wishlistContent.innerHTML = `
                <div class="empty-wishlist">
                    <h3>Please login to view your wishlist</h3>
                    <p>Sign in to save your favorite products</p>
                    <button class="continue-shopping-btn" onclick="showLoginModal()">
                        Login
                    </button>
                </div>
            `;
            return;
        }

        if (this.items.length === 0) {
            wishlistContent.innerHTML = `
                <div class="empty-wishlist">
                    <h3>Your wishlist is empty</h3>
                    <p>Add some products to your wishlist!</p>
                    <button class="continue-shopping-btn" onclick="navigateToPage('home')">
                        Continue Shopping
                    </button>
                </div>
            `;
            return;
        }

        wishlistContent.innerHTML = this.items.map(item => `
            <div class="wishlist-item">
                <button class="remove-from-wishlist" onclick="wishlist.removeItem(${item.id})">×</button>
                <img src="${item.image}" alt="${item.name}" class="product-image" onclick="showProduct(${item.id})">
                <h3 class="product-name">${item.name}</h3>
                <p class="product-price">$${item.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCartFromWishlist(${item.id})">
                    Add to Cart
                </button>
            </div>
        `).join('');
    }
}

// Global wishlist instance
export const wishlist = new Wishlist();

// Helper functions
function addToWishlist(productId) {
    const product = window.products.find(p => p.id === productId);
    if (product) {
        const added = wishlist.addItem(product);
        updateWishlistButtons();
        return added;
    }
    return false;
}

function addToCartFromWishlist(productId) {
    const product = window.products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

function updateWishlistButtons() {
    // Update wishlist buttons on product cards
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        if (wishlist.isInWishlist(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '❤️';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '🤍';
        }
    });
}