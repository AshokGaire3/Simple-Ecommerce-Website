// Reviews management functionality
class Reviews {
    constructor() {
        this.reviews = this.loadFromStorage();
    }

    addReview(productId, rating, comment) {
        if (!auth.isLoggedIn()) {
            auth.showNotification('Please login to add a review', 'error');
            showLoginModal();
            return false;
        }

        const user = auth.getCurrentUser();
        const review = {
            id: Date.now(),
            productId: productId,
            userId: user.id,
            userName: user.name,
            rating: rating,
            comment: comment,
            date: new Date().toISOString()
        };

        // Check if user already reviewed this product
        const existingReview = this.reviews.find(r => 
            r.productId === productId && r.userId === user.id
        );

        if (existingReview) {
            // Update existing review
            existingReview.rating = rating;
            existingReview.comment = comment;
            existingReview.date = new Date().toISOString();
            this.showNotification('Review updated successfully!');
        } else {
            // Add new review
            this.reviews.push(review);
            this.showNotification('Review added successfully!');
        }

        this.saveToStorage();
        return true;
    }

    getProductReviews(productId) {
        return this.reviews.filter(review => review.productId === productId);
    }

    getAverageRating(productId) {
        const productReviews = this.getProductReviews(productId);
        if (productReviews.length === 0) return 0;
        
        const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / productReviews.length).toFixed(1);
    }

    saveToStorage() {
        localStorage.setItem('reviews', JSON.stringify(this.reviews));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('reviews');
        return saved ? JSON.parse(saved) : [];
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

    renderProductReviews(productId) {
        const reviewsContainer = document.getElementById('product-reviews');
        if (!reviewsContainer) return;

        const productReviews = this.getProductReviews(productId);
        const averageRating = this.getAverageRating(productId);

        let reviewsHTML = `
            <div class="reviews-header">
                <h3>Customer Reviews (${productReviews.length})</h3>
                <button class="add-review-btn" onclick="toggleReviewForm()">Write a Review</button>
            </div>
        `;

        if (averageRating > 0) {
            reviewsHTML += `
                <div class="average-rating">
                    <span class="rating-stars">${this.renderStars(averageRating)}</span>
                    <span class="rating-text">${averageRating} out of 5 stars</span>
                </div>
            `;
        }

        // Review form
        reviewsHTML += `
            <div id="review-form" class="review-form" style="display: none;">
                <h4>Write Your Review</h4>
                <div class="rating-input">
                    ${[1,2,3,4,5].map(i => `
                        <span class="star" data-rating="${i}" onclick="setRating(${i})">★</span>
                    `).join('')}
                </div>
                <div class="form-group">
                    <textarea id="review-comment" placeholder="Share your thoughts about this product..."></textarea>
                </div>
                <div class="form-actions">
                    <button class="auth-btn" onclick="submitReview(${productId})">Submit Review</button>
                    <button class="auth-btn" onclick="toggleReviewForm()">Cancel</button>
                </div>
            </div>
        `;

        // Existing reviews
        if (productReviews.length > 0) {
            reviewsHTML += `<div class="reviews-list">`;
            productReviews.forEach(review => {
                reviewsHTML += `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${review.userName}</span>
                            <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <div class="review-rating">${this.renderStars(review.rating)}</div>
                        <div class="review-text">${review.comment}</div>
                    </div>
                `;
            });
            reviewsHTML += `</div>`;
        } else {
            reviewsHTML += `
                <div class="no-reviews">
                    <p>No reviews yet. Be the first to review this product!</p>
                </div>
            `;
        }

        reviewsContainer.innerHTML = reviewsHTML;
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '★';
        }
        
        if (hasHalfStar) {
            starsHTML += '☆';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '☆';
        }
        
        return starsHTML;
    }
}

// Global reviews instance
const reviews = new Reviews();

// Review form functions
let selectedRating = 0;

function toggleReviewForm() {
    const form = document.getElementById('review-form');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
        if (form.style.display === 'block') {
            selectedRating = 0;
            document.getElementById('review-comment').value = '';
            updateStarDisplay();
        }
    }
}

function setRating(rating) {
    selectedRating = rating;
    updateStarDisplay();
}

function updateStarDisplay() {
    document.querySelectorAll('.rating-input .star').forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitReview(productId) {
    const comment = document.getElementById('review-comment').value.trim();
    
    if (selectedRating === 0) {
        reviews.showNotification('Please select a rating', 'error');
        return;
    }
    
    if (!comment) {
        reviews.showNotification('Please write a comment', 'error');
        return;
    }
    
    if (reviews.addReview(productId, selectedRating, comment)) {
        reviews.renderProductReviews(productId);
        toggleReviewForm();
    }
}