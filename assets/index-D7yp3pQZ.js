(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();class y{constructor(){this.currentUser=this.loadFromStorage(),this.updateAuthUI()}login(e,t){if(e&&t){const s={id:Date.now(),name:e.split("@")[0],email:e,loginTime:new Date().toISOString()};return this.currentUser=s,this.saveToStorage(),this.updateAuthUI(),this.showNotification("Login successful!","success"),!0}return!1}register(e,t,s){if(e&&t&&s){const o={id:Date.now(),name:e,email:t,loginTime:new Date().toISOString()};return this.currentUser=o,this.saveToStorage(),this.updateAuthUI(),this.showNotification("Registration successful!","success"),!0}return!1}logout(){this.currentUser=null,this.saveToStorage(),this.updateAuthUI(),this.showNotification("Logged out successfully!","success"),wishlist.clear(),document.querySelector(".page.active").id==="wishlist-page"&&navigateToPage("home")}isLoggedIn(){return this.currentUser!==null}getCurrentUser(){return this.currentUser}updateAuthUI(){const e=document.getElementById("auth-buttons"),t=document.getElementById("user-menu"),s=document.querySelector(".user-name");this.isLoggedIn()?(e.style.display="none",t.style.display="flex",s&&(s.textContent=`Hello, ${this.currentUser.name}`)):(e.style.display="flex",t.style.display="none")}saveToStorage(){this.currentUser?localStorage.setItem("currentUser",JSON.stringify(this.currentUser)):localStorage.removeItem("currentUser")}loadFromStorage(){const e=localStorage.getItem("currentUser");return e?JSON.parse(e):null}showNotification(e,t="success"){const s=document.createElement("div"),o=t==="success"?"#16a34a":"#ef4444";s.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${o};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(0)"},100),setTimeout(()=>{s.style.transform="translateX(400px)",setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},300)},3e3)}}const c=new y;function v(){document.getElementById("login-modal").style.display="block"}function w(){document.getElementById("register-modal").style.display="block"}function d(r){document.getElementById(r).style.display="none"}function x(){c.logout()}window.showLoginModal=v;window.showRegisterModal=w;window.closeModal=d;window.logout=x;document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("login-form");r&&r.addEventListener("submit",function(t){t.preventDefault();const s=document.getElementById("login-email").value,o=document.getElementById("login-password").value;c.login(s,o)?(d("login-modal"),r.reset()):c.showNotification("Invalid credentials","error")});const e=document.getElementById("register-form");e&&e.addEventListener("submit",function(t){t.preventDefault();const s=document.getElementById("register-name").value,o=document.getElementById("register-email").value,i=document.getElementById("register-password").value;c.register(s,o,i)?(d("register-modal"),e.reset()):c.showNotification("Registration failed","error")}),window.addEventListener("click",function(t){const s=document.getElementById("login-modal"),o=document.getElementById("register-modal");t.target===s&&d("login-modal"),t.target===o&&d("register-modal")})});const l=[{id:1,name:"Wireless Bluetooth Headphones",price:79.99,image:"https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",images:["https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg","https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg","https://images.pexels.com/photos/6069122/pexels-photo-6069122.jpeg"],description:"Premium quality wireless headphones with noise cancellation, 30-hour battery life, and crystal clear audio. Perfect for music lovers and professionals alike.",category:"Electronics",variants:{color:["Black","White","Blue"],size:["Standard"]}},{id:2,name:"Smartphone Case",price:24.99,image:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",images:["https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg","https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg"],description:"Durable protective case with military-grade drop protection. Compatible with wireless charging and features precise cutouts for all ports.",category:"Electronics",variants:{color:["Clear","Black","Blue","Red"],size:["iPhone 14","iPhone 15","Samsung Galaxy"]}},{id:3,name:"Portable Power Bank",price:45.99,image:"https://images.pexels.com/photos/161117/pexels-photo-161117.jpeg",images:["https://images.pexels.com/photos/161117/pexels-photo-161117.jpeg","https://images.pexels.com/photos/4526943/pexels-photo-4526943.jpeg"],description:"High-capacity 20,000mAh power bank with fast charging technology. Multiple USB ports and LED display showing remaining battery percentage.",category:"Electronics",variants:{capacity:["10,000mAh","20,000mAh","30,000mAh"],color:["Black","White"]}},{id:4,name:"Ergonomic Office Chair",price:199.99,image:"https://images.pexels.com/photos/1166415/pexels-photo-1166415.jpeg",images:["https://images.pexels.com/photos/1166415/pexels-photo-1166415.jpeg","https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"],description:"Comfortable ergonomic office chair with lumbar support, adjustable height, and breathable mesh backing. Perfect for long work sessions.",category:"Furniture",variants:{color:["Black","Gray","White"],size:["Standard","Tall"]}},{id:5,name:"Standing Desk",price:349.99,image:"https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",images:["https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg","https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"],description:"Electric height-adjustable standing desk with memory presets. Promotes better posture and health during work hours.",category:"Furniture",variants:{size:["48 inch","60 inch","72 inch"],color:["Oak","Walnut","White"]}},{id:6,name:"LED Desk Lamp",price:39.99,image:"https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",description:"Modern LED desk lamp with adjustable brightness and color temperature. Touch control and USB charging port included.",category:"Home"},{id:7,name:"Coffee Maker",price:89.99,image:"https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",images:["https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg","https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg"],description:"Programmable coffee maker with thermal carafe. Brews up to 12 cups of coffee with customizable strength settings.",category:"Kitchen"},{id:8,name:"Yoga Mat",price:29.99,image:"https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",description:"Premium non-slip yoga mat with extra cushioning. Made from eco-friendly materials with excellent grip and durability.",category:"Fitness"},{id:9,name:"Resistance Bands Set",price:19.99,image:"https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",description:"Complete resistance bands set with multiple resistance levels. Includes door anchor, handles, and ankle straps.",category:"Fitness"},{id:10,name:"Smart Water Bottle",price:34.99,image:"https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg",description:"Insulated smart water bottle that tracks hydration and maintains temperature for 12+ hours. App connectivity included.",category:"Health"},{id:11,name:"Wireless Charging Pad",price:25.99,image:"https://images.pexels.com/photos/6069122/pexels-photo-6069122.jpeg",description:"Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED charging indicator.",category:"Electronics"},{id:12,name:"Bluetooth Speaker",price:59.99,image:"https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",description:"Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Waterproof design perfect for outdoor use.",category:"Electronics"},{id:13,name:"Laptop Stand",price:49.99,image:"https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg",description:"Adjustable aluminum laptop stand with excellent cooling and ergonomic positioning. Compatible with all laptop sizes.",category:"Electronics"},{id:14,name:"Air Purifier",price:129.99,image:"https://images.pexels.com/photos/7790945/pexels-photo-7790945.jpeg",description:"HEPA air purifier that removes 99.97% of allergens and pollutants. Smart controls and air quality monitoring included.",category:"Home"},{id:15,name:"Essential Oil Diffuser",price:42.99,image:"https://images.pexels.com/photos/3968179/pexels-photo-3968179.jpeg",description:"Ultrasonic essential oil diffuser with 7 color LED lights and multiple timer settings. Creates a relaxing atmosphere.",category:"Home"},{id:16,name:"Kitchen Knife Set",price:79.99,image:"https://images.pexels.com/photos/2249602/pexels-photo-2249602.jpeg",description:"Professional 8-piece knife set with high-carbon stainless steel blades and ergonomic handles. Includes wooden block.",category:"Kitchen"},{id:17,name:"Instant Pot",price:99.99,image:"https://images.pexels.com/photos/4518583/pexels-photo-4518583.jpeg",description:"Multi-functional pressure cooker that replaces 7 kitchen appliances. Perfect for quick and healthy meal preparation.",category:"Kitchen"},{id:18,name:"Memory Foam Pillow",price:35.99,image:"https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg",description:"Contoured memory foam pillow designed to support neck and spine alignment. Hypoallergenic with removable cover.",category:"Home"},{id:19,name:"Weighted Blanket",price:65.99,image:"https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg",description:"15lb weighted blanket that promotes deeper sleep and reduces anxiety. Made with breathable bamboo fabric.",category:"Home"},{id:20,name:"Fitness Tracker",price:89.99,image:"https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",description:"Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Tracks steps, sleep, and workouts.",category:"Fitness"},{id:21,name:"Dumbbells Set",price:149.99,image:"https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",description:"Adjustable dumbbell set ranging from 5-50 lbs each. Space-saving design perfect for home gym workouts.",category:"Fitness"},{id:22,name:"Gaming Mouse",price:69.99,image:"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",description:"High-precision gaming mouse with customizable RGB lighting and programmable buttons. 16,000 DPI sensor included.",category:"Gaming"},{id:23,name:"Mechanical Keyboard",price:119.99,image:"https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",description:"RGB mechanical keyboard with tactile switches and customizable lighting effects. Perfect for gaming and typing.",category:"Gaming"},{id:24,name:"Webcam HD",price:79.99,image:"https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",description:"1080p HD webcam with auto-focus and noise-reducing microphone. Ideal for video calls and streaming.",category:"Electronics"},{id:25,name:"Tablet Stand",price:24.99,image:"https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg",description:"Adjustable tablet stand with multiple viewing angles. Compatible with tablets from 4 to 13 inches.",category:"Electronics"},{id:26,name:"Travel Backpack",price:89.99,image:"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg",description:"Spacious travel backpack with multiple compartments and TSA-friendly laptop section. Water-resistant material.",category:"Travel"},{id:27,name:"Portable Charger",price:29.99,image:"https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg",description:"Compact 10,000mAh portable charger with dual USB ports and LED power indicator. Perfect for travel.",category:"Electronics"},{id:28,name:"Smart Thermostat",price:199.99,image:"https://images.pexels.com/photos/4996813/pexels-photo-4996813.jpeg",description:"Wi-Fi enabled smart thermostat with learning capabilities and energy-saving features. Control from anywhere.",category:"Home"}];class b{constructor(){this.items=this.loadFromStorage(),this.updateWishlistCount()}addItem(e){return c.isLoggedIn()?this.items.find(s=>s.id===e.id)?(this.showNotification(`${e.name} is already in your wishlist`,"error"),!1):(this.items.push(e),this.saveToStorage(),this.updateWishlistCount(),this.showNotification(`${e.name} added to wishlist!`),!0):(c.showNotification("Please login to add items to wishlist","error"),showLoginModal(),!1)}removeItem(e){this.items=this.items.filter(t=>t.id!==e),this.saveToStorage(),this.updateWishlistCount(),this.renderWishlistPage()}isInWishlist(e){return this.items.some(t=>t.id===e)}clear(){this.items=[],this.saveToStorage(),this.updateWishlistCount()}getItemCount(){return this.items.length}saveToStorage(){const e=c.isLoggedIn()?c.getCurrentUser().id:"guest";localStorage.setItem(`wishlist_${e}`,JSON.stringify(this.items))}loadFromStorage(){const e=c.isLoggedIn()?c.getCurrentUser().id:"guest",t=localStorage.getItem(`wishlist_${e}`);return t?JSON.parse(t):[]}updateWishlistCount(){const e=document.querySelector(".wishlist-count");e&&(e.textContent=this.getItemCount())}showNotification(e,t="success"){const s=document.createElement("div"),o=t==="success"?"#16a34a":"#ef4444";s.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${o};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(0)"},100),setTimeout(()=>{s.style.transform="translateX(400px)",setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},300)},3e3)}renderWishlistPage(){const e=document.getElementById("wishlist-content");if(e){if(!c.isLoggedIn()){e.innerHTML=`
                <div class="empty-wishlist">
                    <h3>Please login to view your wishlist</h3>
                    <p>Sign in to save your favorite products</p>
                    <button class="continue-shopping-btn" onclick="showLoginModal()">
                        Login
                    </button>
                </div>
            `;return}if(this.items.length===0){e.innerHTML=`
                <div class="empty-wishlist">
                    <h3>Your wishlist is empty</h3>
                    <p>Add some products to your wishlist!</p>
                    <button class="continue-shopping-btn" onclick="navigateToPage('home')">
                        Continue Shopping
                    </button>
                </div>
            `;return}e.innerHTML=this.items.map(t=>`
            <div class="wishlist-item">
                <button class="remove-from-wishlist" onclick="wishlist.removeItem(${t.id})">×</button>
                <img src="${t.image}" alt="${t.name}" class="product-image" onclick="showProduct(${t.id})">
                <h3 class="product-name">${t.name}</h3>
                <p class="product-price">$${t.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCartFromWishlist(${t.id})">
                    Add to Cart
                </button>
            </div>
        `).join("")}}}const g=new b;class S{constructor(){this.reviews=this.loadFromStorage()}addReview(e,t,s){if(!auth.isLoggedIn())return auth.showNotification("Please login to add a review","error"),showLoginModal(),!1;const o=auth.getCurrentUser(),i={id:Date.now(),productId:e,userId:o.id,userName:o.name,rating:t,comment:s,date:new Date().toISOString()},a=this.reviews.find(n=>n.productId===e&&n.userId===o.id);return a?(a.rating=t,a.comment=s,a.date=new Date().toISOString(),this.showNotification("Review updated successfully!")):(this.reviews.push(i),this.showNotification("Review added successfully!")),this.saveToStorage(),!0}getProductReviews(e){return this.reviews.filter(t=>t.productId===e)}getAverageRating(e){const t=this.getProductReviews(e);return t.length===0?0:(t.reduce((o,i)=>o+i.rating,0)/t.length).toFixed(1)}saveToStorage(){localStorage.setItem("reviews",JSON.stringify(this.reviews))}loadFromStorage(){const e=localStorage.getItem("reviews");return e?JSON.parse(e):[]}showNotification(e,t="success"){const s=document.createElement("div"),o=t==="success"?"#16a34a":"#ef4444";s.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${o};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `,s.textContent=e,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(0)"},100),setTimeout(()=>{s.style.transform="translateX(400px)",setTimeout(()=>{document.body.contains(s)&&document.body.removeChild(s)},300)},3e3)}renderProductReviews(e){const t=document.getElementById("product-reviews");if(!t)return;const s=this.getProductReviews(e),o=this.getAverageRating(e);let i=`
            <div class="reviews-header">
                <h3>Customer Reviews (${s.length})</h3>
                <button class="add-review-btn" onclick="toggleReviewForm()">Write a Review</button>
            </div>
        `;o>0&&(i+=`
                <div class="average-rating">
                    <span class="rating-stars">${this.renderStars(o)}</span>
                    <span class="rating-text">${o} out of 5 stars</span>
                </div>
            `),i+=`
            <div id="review-form" class="review-form" style="display: none;">
                <h4>Write Your Review</h4>
                <div class="rating-input">
                    ${[1,2,3,4,5].map(a=>`
                        <span class="star" data-rating="${a}" onclick="setRating(${a})">★</span>
                    `).join("")}
                </div>
                <div class="form-group">
                    <textarea id="review-comment" placeholder="Share your thoughts about this product..."></textarea>
                </div>
                <div class="form-actions">
                    <button class="auth-btn" onclick="submitReview(${e})">Submit Review</button>
                    <button class="auth-btn" onclick="toggleReviewForm()">Cancel</button>
                </div>
            </div>
        `,s.length>0?(i+='<div class="reviews-list">',s.forEach(a=>{i+=`
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${a.userName}</span>
                            <span class="review-date">${new Date(a.date).toLocaleDateString()}</span>
                        </div>
                        <div class="review-rating">${this.renderStars(a.rating)}</div>
                        <div class="review-text">${a.comment}</div>
                    </div>
                `}),i+="</div>"):i+=`
                <div class="no-reviews">
                    <p>No reviews yet. Be the first to review this product!</p>
                </div>
            `,t.innerHTML=i}renderStars(e){const t=Math.floor(e),s=e%1!==0;let o="";for(let a=0;a<t;a++)o+="★";s&&(o+="☆");const i=5-Math.ceil(e);for(let a=0;a<i;a++)o+="☆";return o}}new S;class C{constructor(){this.filteredProducts=[...l],this.currentFilters={search:"",category:"",sort:"name-asc",maxPrice:400}}performSearch(e){this.currentFilters.search=e.toLowerCase(),this.applyFilters()}setCategory(e){this.currentFilters.category=e,this.applyFilters()}setSort(e){this.currentFilters.sort=e,this.applyFilters()}setMaxPrice(e){this.currentFilters.maxPrice=e,this.applyFilters()}applyFilters(){let e=[...l];switch(this.currentFilters.search&&(e=e.filter(t=>t.name.toLowerCase().includes(this.currentFilters.search)||t.description.toLowerCase().includes(this.currentFilters.search)||t.category.toLowerCase().includes(this.currentFilters.search))),this.currentFilters.category&&(e=e.filter(t=>t.category===this.currentFilters.category)),e=e.filter(t=>t.price<=this.currentFilters.maxPrice),this.currentFilters.sort){case"name-asc":e.sort((t,s)=>t.name.localeCompare(s.name));break;case"name-desc":e.sort((t,s)=>s.name.localeCompare(t.name));break;case"price-asc":e.sort((t,s)=>t.price-s.price);break;case"price-desc":e.sort((t,s)=>s.price-t.price);break}this.filteredProducts=e,this.renderFilteredProducts()}renderFilteredProducts(){const e=document.getElementById("products-grid");if(e){if(this.filteredProducts.length===0){e.innerHTML=`
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                    <h3 style="color: #6b7280; margin-bottom: 1rem;">No products found</h3>
                    <p style="color: #9ca3af;">Try adjusting your search or filters</p>
                </div>
            `;return}e.innerHTML=this.filteredProducts.map(t=>`
            <div class="product-card" onclick="showProduct(${t.id})">
                <button class="wishlist-btn" data-product-id="${t.id}" onclick="event.stopPropagation(); toggleWishlist(${t.id})">
                    ${g.isInWishlist(t.id)?"❤️":"🤍"}
                </button>
                <img src="${t.image}" alt="${t.name}" class="product-image">
                <h3 class="product-name">${t.name}</h3>
                <p class="product-price">$${t.price.toFixed(2)}</p>
            </div>
        `).join(""),updateWishlistButtons()}}getRecommendations(e,t=4){const s=l.find(i=>i.id===e);if(!s)return[];let o=l.filter(i=>i.id!==e&&i.category===s.category);if(o.length<t){const i=l.filter(a=>a.id!==e&&a.category!==s.category);o=[...o,...i]}return o.sort(()=>Math.random()-.5).slice(0,t)}}const p=new C;function h(){const r=document.getElementById("search-input");r&&p.performSearch(r.value)}document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("search-input");if(r){r.addEventListener("keypress",function(o){o.key==="Enter"&&h()});let s;r.addEventListener("input",function(){clearTimeout(s),s=setTimeout(()=>{h()},300)})}const e=document.getElementById("price-range"),t=document.getElementById("price-display");e&&t&&(t.textContent=`$${e.value}`)});class I{constructor(){this.items=this.loadFromStorage(),this.updateCartCount()}addItem(e,t=1){const s=this.items.find(o=>o.id===e.id);s?s.quantity+=t:this.items.push({...e,quantity:t}),this.saveToStorage(),this.updateCartCount(),this.showNotification(`${e.name} added to cart!`)}removeItem(e){this.items=this.items.filter(t=>t.id!==e),this.saveToStorage(),this.updateCartCount(),this.renderCartPage()}updateQuantity(e,t){if(t<=0){this.removeItem(e);return}const s=this.items.find(o=>o.id===e);s&&(s.quantity=t,this.saveToStorage(),this.updateCartCount(),this.renderCartPage())}getTotal(){return this.items.reduce((e,t)=>e+t.price*t.quantity,0)}getItemCount(){return this.items.reduce((e,t)=>e+t.quantity,0)}clear(){this.items=[],this.saveToStorage(),this.updateCartCount()}saveToStorage(){localStorage.setItem("cart",JSON.stringify(this.items))}loadFromStorage(){const e=localStorage.getItem("cart");return e?JSON.parse(e):[]}updateCartCount(){const e=document.querySelector(".cart-count");e&&(e.textContent=this.getItemCount())}showNotification(e){const t=document.createElement("div");t.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #16a34a;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.transform="translateX(0)"},100),setTimeout(()=>{t.style.transform="translateX(400px)",setTimeout(()=>{document.body.removeChild(t)},300)},3e3)}renderCartPage(){const e=document.getElementById("cart-items"),t=document.getElementById("cart-summary");if(!e||!t)return;if(this.items.length===0){e.innerHTML=`
                <div class="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <button class="continue-shopping-btn" onclick="navigateToPage('home')">
                        Continue Shopping
                    </button>
                </div>
            `,t.innerHTML="";return}e.innerHTML=this.items.map(n=>`
            <div class="cart-item">
                <img src="${n.image}" alt="${n.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${n.name}</h3>
                    <p class="cart-item-price">$${n.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="cart.updateQuantity(${n.id}, ${n.quantity-1})">-</button>
                    <span class="quantity">${n.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity(${n.id}, ${n.quantity+1})">+</button>
                </div>
                <div class="item-total">$${(n.price*n.quantity).toFixed(2)}</div>
                <button class="remove-btn" onclick="cart.removeItem(${n.id})">Remove</button>
            </div>
        `).join("");const s=this.getTotal(),o=s*.08,i=s>50?0:9.99,a=s+o+i;t.innerHTML=`
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${s.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax:</span>
                <span>$${o.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>${i===0?"FREE":"$"+i.toFixed(2)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>$${a.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="navigateToPage('checkout')">
                Proceed to Checkout
            </button>
        `}renderOrderSummary(){const e=document.getElementById("order-summary");if(!e)return;if(this.items.length===0){e.innerHTML="<p>Your cart is empty.</p>";return}const t=this.getTotal(),s=t*.08,o=t>50?0:9.99,i=t+s+o;e.innerHTML=`
            <h3>Order Summary</h3>
            <div class="order-items">
                ${this.items.map(a=>`
                    <div class="summary-row">
                        <span>${a.name} (${a.quantity})</span>
                        <span>$${(a.price*a.quantity).toFixed(2)}</span>
                    </div>
                `).join("")}
            </div>
            <hr style="margin: 16px 0;">
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>$${t.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Tax:</span>
                <span>$${s.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping:</span>
                <span>${o===0?"FREE":"$"+o.toFixed(2)}</span>
            </div>
            <div class="summary-row summary-total">
                <span>Total:</span>
                <span>$${i.toFixed(2)}</span>
            </div>
        `}}const u=new I;document.addEventListener("DOMContentLoaded",function(){k(),E(),T()});function k(){$(),m("home")}function E(){document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("data-page");m(t)})})}function m(r){document.querySelectorAll(".page").forEach(t=>{t.classList.remove("active")});const e=document.getElementById(`${r}-page`);if(e){switch(e.classList.add("active"),console.log(`Navigated to: ${r}`),r){case"home":document.title="ShopMart - Your Premier Online Store",p.currentFilters={search:"",category:"",sort:"name-asc",maxPrice:400},p.applyFilters();break;case"cart":document.title="Shopping Cart - ShopMart",u.renderCartPage();break;case"wishlist":document.title="My Wishlist - ShopMart",g.renderWishlistPage();break;case"checkout":document.title="Checkout - ShopMart",u.renderOrderSummary();break;case"success":document.title="Order Complete - ShopMart";break;case"contact":document.title="Contact Us - ShopMart";break}window.scrollTo(0,0)}else console.warn(`Page not found: ${r}`)}function $(){!document.getElementById("products-grid")||!l||p.renderFilteredProducts()}function T(){const r=document.getElementById("checkout-form");if(!r)return;r.addEventListener("submit",function(o){o.preventDefault(),new FormData(r),F()&&P()});const e=document.getElementById("cardNumber");e&&e.addEventListener("input",function(o){let i=o.target.value.replace(/\s+/g,"").replace(/[^0-9]/gi,""),a=i.match(/.{1,4}/g)?.join(" ")||i;o.target.value=a});const t=document.getElementById("expiryDate");t&&t.addEventListener("input",function(o){let i=o.target.value.replace(/\D/g,"");i.length>=2&&(i=i.substring(0,2)+"/"+i.substring(2,4)),o.target.value=i});const s=document.getElementById("cvv");s&&s.addEventListener("input",function(o){o.target.value=o.target.value.replace(/\D/g,"").substring(0,4)})}function F(r){const e=["fullName","email","address","city","zipCode","cardNumber","expiryDate","cvv"];for(const o of e){const i=document.getElementById(o);if(i.value.trim())i.style.borderColor="#d1d5db";else return i.style.borderColor="#ef4444",i.focus(),!1}const t=document.getElementById("email");return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value)?!0:(t.style.borderColor="#ef4444",t.focus(),!1)}function P(){const r=document.querySelector(".checkout-btn"),e=r.textContent;r.textContent="Processing...",r.disabled=!0,setTimeout(()=>{u.clear(),m("success"),r.textContent=e,r.disabled=!1},2e3)}function f(){window.innerWidth<=768?L():M()}function L(){document.querySelectorAll(".cart-item").forEach(e=>{const t=e.querySelector(".quantity-controls"),s=e.querySelector(".remove-btn"),o=e.querySelector(".item-total");if(t&&s&&o){let i=e.querySelector(".cart-item-controls");i||(i=document.createElement("div"),i.className="cart-item-controls",i.appendChild(t),i.appendChild(o),i.appendChild(s),e.appendChild(i))}})}function M(){document.querySelectorAll(".cart-item-controls").forEach(e=>{const t=e.parentElement;for(;e.firstChild;)t.appendChild(e.firstChild);e.remove()})}window.addEventListener("resize",f);f();window.navigateToPage=m;window.showLoginModal=showLoginModal;window.showRegisterModal=showRegisterModal;window.logout=logout;window.closeModal=closeModal;
