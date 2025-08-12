// Authentication management
export class Auth {
    constructor() {
        this.currentUser = this.loadFromStorage();
        this.updateAuthUI();
    }

    login(email, password) {
        // Simulate login - in real app, this would call an API
        if (email && password) {
            const user = {
                id: Date.now(),
                name: email.split('@')[0],
                email: email,
                loginTime: new Date().toISOString()
            };
            
            this.currentUser = user;
            this.saveToStorage();
            this.updateAuthUI();
            this.showNotification('Login successful!', 'success');
            return true;
        }
        return false;
    }

    register(name, email, password) {
        // Simulate registration - in real app, this would call an API
        if (name && email && password) {
            const user = {
                id: Date.now(),
                name: name,
                email: email,
                loginTime: new Date().toISOString()
            };
            
            this.currentUser = user;
            this.saveToStorage();
            this.updateAuthUI();
            this.showNotification('Registration successful!', 'success');
            return true;
        }
        return false;
    }

    logout() {
        this.currentUser = null;
        this.saveToStorage();
        this.updateAuthUI();
        this.showNotification('Logged out successfully!', 'success');
        
        // Clear user-specific data
        wishlist.clear();
        
        // Redirect to home if on protected pages
        const currentPage = document.querySelector('.page.active').id;
        if (currentPage === 'wishlist-page') {
            navigateToPage('home');
        }
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    updateAuthUI() {
        const authButtons = document.getElementById('auth-buttons');
        const userMenu = document.getElementById('user-menu');
        const userName = document.querySelector('.user-name');

        if (this.isLoggedIn()) {
            authButtons.style.display = 'none';
            userMenu.style.display = 'flex';
            if (userName) {
                userName.textContent = `Hello, ${this.currentUser.name}`;
            }
        } else {
            authButtons.style.display = 'flex';
            userMenu.style.display = 'none';
        }
    }

    saveToStorage() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }

    loadFromStorage() {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
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
}

export const auth = new Auth();

// Modal functions
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
}

function showRegisterModal() {
    document.getElementById('register-modal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function logout() {
    auth.logout();
}

// Expose functions to window
window.showLoginModal = showLoginModal;
window.showRegisterModal = showRegisterModal;
window.closeModal = closeModal;
window.logout = logout;

// Form handlers
document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (auth.login(email, password)) {
                closeModal('login-modal');
                loginForm.reset();
            } else {
                auth.showNotification('Invalid credentials', 'error');
            }
        });
    }

    // Register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            if (auth.register(name, email, password)) {
                closeModal('register-modal');
                registerForm.reset();
            } else {
                auth.showNotification('Registration failed', 'error');
            }
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        
        if (e.target === loginModal) {
            closeModal('login-modal');
        }
        if (e.target === registerModal) {
            closeModal('register-modal');
        }
    });
});