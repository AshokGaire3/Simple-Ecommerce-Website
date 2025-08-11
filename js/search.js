import { products } from './products.js';
import { wishlist } from './wishlist.js';

// Search and filtering functionality
class Search {
    constructor() {
        this.filteredProducts = [...products];
        this.currentFilters = {
            search: '',
            category: '',
            sort: 'name-asc',
            maxPrice: 400
        };
    }

    performSearch(query) {
        this.currentFilters.search = query.toLowerCase();
        this.applyFilters();
    }

    setCategory(category) {
        this.currentFilters.category = category;
        this.applyFilters();
    }

    setSort(sortOption) {
        this.currentFilters.sort = sortOption;
        this.applyFilters();
    }

    setMaxPrice(price) {
        this.currentFilters.maxPrice = price;
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...products];

        // Apply search filter
        if (this.currentFilters.search) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(this.currentFilters.search) ||
                product.description.toLowerCase().includes(this.currentFilters.search) ||
                product.category.toLowerCase().includes(this.currentFilters.search)
            );
        }

        // Apply category filter
        if (this.currentFilters.category) {
            filtered = filtered.filter(product => 
                product.category === this.currentFilters.category
            );
        }

        // Apply price filter
        filtered = filtered.filter(product => 
            product.price <= this.currentFilters.maxPrice
        );

        // Apply sorting
        switch (this.currentFilters.sort) {
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
        }

        this.filteredProducts = filtered;
        this.renderFilteredProducts();
    }

    renderFilteredProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        if (this.filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                    <h3 style="color: #6b7280; margin-bottom: 1rem;">No products found</h3>
                    <p style="color: #9ca3af;">Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = this.filteredProducts.map(product => `
            <div class="product-card" onclick="showProduct(${product.id})">
                <button class="wishlist-btn" data-product-id="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    ${wishlist.isInWishlist(product.id) ? '❤️' : '🤍'}
                </button>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `).join('');

        // Update wishlist buttons
        updateWishlistButtons();
    }

    getRecommendations(currentProductId, count = 4) {
        const currentProduct = products.find(p => p.id === currentProductId);
        if (!currentProduct) return [];

        // Get products from same category first
        let recommendations = products.filter(p => 
            p.id !== currentProductId && p.category === currentProduct.category
        );

        // If not enough, add products from other categories
        if (recommendations.length < count) {
            const otherProducts = products.filter(p => 
                p.id !== currentProductId && p.category !== currentProduct.category
            );
            recommendations = [...recommendations, ...otherProducts];
        }

        // Shuffle and return limited count
        return recommendations
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
    }
}

// Global search instance
export const search = new Search();

// Search and filter functions
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        search.performSearch(searchInput.value);
    }
}

function applyFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');

    if (categoryFilter) {
        search.setCategory(categoryFilter.value);
    }

    if (sortFilter) {
        search.setSort(sortFilter.value);
    }

    if (priceRange) {
        const maxPrice = parseInt(priceRange.value);
        search.setMaxPrice(maxPrice);
        if (priceDisplay) {
            priceDisplay.textContent = `$${maxPrice}`;
        }
    }
}

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        if (wishlist.isInWishlist(productId)) {
            wishlist.removeItem(productId);
        } else {
            wishlist.addItem(product);
        }
        updateWishlistButtons();
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search input handler
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Real-time search (debounced)
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch();
            }, 300);
        });
    }

    // Initialize price display
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    if (priceRange && priceDisplay) {
        priceDisplay.textContent = `$${priceRange.value}`;
    }
});