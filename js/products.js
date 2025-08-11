// Product data with 25+ items across different categories
export const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
        images: [
            "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
            "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
            "https://images.pexels.com/photos/6069122/pexels-photo-6069122.jpeg"
        ],
        description: "Premium quality wireless headphones with noise cancellation, 30-hour battery life, and crystal clear audio. Perfect for music lovers and professionals alike.",
        category: "Electronics",
        variants: {
            color: ["Black", "White", "Blue"],
            size: ["Standard"]
        }
    },
    {
        id: 2,
        name: "Smartphone Case",
        price: 24.99,
        image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",
        images: [
            "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",
            "https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg"
        ],
        description: "Durable protective case with military-grade drop protection. Compatible with wireless charging and features precise cutouts for all ports.",
        category: "Electronics",
        variants: {
            color: ["Clear", "Black", "Blue", "Red"],
            size: ["iPhone 14", "iPhone 15", "Samsung Galaxy"]
        }
    },
    {
        id: 3,
        name: "Portable Power Bank",
        price: 45.99,
        image: "https://images.pexels.com/photos/161117/pexels-photo-161117.jpeg",
        images: [
            "https://images.pexels.com/photos/161117/pexels-photo-161117.jpeg",
            "https://images.pexels.com/photos/4526943/pexels-photo-4526943.jpeg"
        ],
        description: "High-capacity 20,000mAh power bank with fast charging technology. Multiple USB ports and LED display showing remaining battery percentage.",
        category: "Electronics",
        variants: {
            capacity: ["10,000mAh", "20,000mAh", "30,000mAh"],
            color: ["Black", "White"]
        }
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        price: 199.99,
        image: "https://images.pexels.com/photos/1166415/pexels-photo-1166415.jpeg",
        images: [
            "https://images.pexels.com/photos/1166415/pexels-photo-1166415.jpeg",
            "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
        ],
        description: "Comfortable ergonomic office chair with lumbar support, adjustable height, and breathable mesh backing. Perfect for long work sessions.",
        category: "Furniture",
        variants: {
            color: ["Black", "Gray", "White"],
            size: ["Standard", "Tall"]
        }
    },
    {
        id: 5,
        name: "Standing Desk",
        price: 349.99,
        image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
        images: [
            "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
            "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
        ],
        description: "Electric height-adjustable standing desk with memory presets. Promotes better posture and health during work hours.",
        category: "Furniture",
        variants: {
            size: ["48 inch", "60 inch", "72 inch"],
            color: ["Oak", "Walnut", "White"]
        }
    },
    {
        id: 6,
        name: "LED Desk Lamp",
        price: 39.99,
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
        description: "Modern LED desk lamp with adjustable brightness and color temperature. Touch control and USB charging port included.",
        category: "Home"
    },
    {
        id: 7,
        name: "Coffee Maker",
        price: 89.99,
        image: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
        images: [
            "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
            "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg"
        ],
        description: "Programmable coffee maker with thermal carafe. Brews up to 12 cups of coffee with customizable strength settings.",
        category: "Kitchen"
    },
    {
        id: 8,
        name: "Yoga Mat",
        price: 29.99,
        image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
        description: "Premium non-slip yoga mat with extra cushioning. Made from eco-friendly materials with excellent grip and durability.",
        category: "Fitness"
    },
    {
        id: 9,
        name: "Resistance Bands Set",
        price: 19.99,
        image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg",
        description: "Complete resistance bands set with multiple resistance levels. Includes door anchor, handles, and ankle straps.",
        category: "Fitness"
    },
    {
        id: 10,
        name: "Smart Water Bottle",
        price: 34.99,
        image: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg",
        description: "Insulated smart water bottle that tracks hydration and maintains temperature for 12+ hours. App connectivity included.",
        category: "Health"
    },
    {
        id: 11,
        name: "Wireless Charging Pad",
        price: 25.99,
        image: "https://images.pexels.com/photos/6069122/pexels-photo-6069122.jpeg",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED charging indicator.",
        category: "Electronics"
    },
    {
        id: 12,
        name: "Bluetooth Speaker",
        price: 59.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
        description: "Portable Bluetooth speaker with 360-degree sound and 12-hour battery life. Waterproof design perfect for outdoor use.",
        category: "Electronics"
    },
    {
        id: 13,
        name: "Laptop Stand",
        price: 49.99,
        image: "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg",
        description: "Adjustable aluminum laptop stand with excellent cooling and ergonomic positioning. Compatible with all laptop sizes.",
        category: "Electronics"
    },
    {
        id: 14,
        name: "Air Purifier",
        price: 129.99,
        image: "https://images.pexels.com/photos/7790945/pexels-photo-7790945.jpeg",
        description: "HEPA air purifier that removes 99.97% of allergens and pollutants. Smart controls and air quality monitoring included.",
        category: "Home"
    },
    {
        id: 15,
        name: "Essential Oil Diffuser",
        price: 42.99,
        image: "https://images.pexels.com/photos/3968179/pexels-photo-3968179.jpeg",
        description: "Ultrasonic essential oil diffuser with 7 color LED lights and multiple timer settings. Creates a relaxing atmosphere.",
        category: "Home"
    },
    {
        id: 16,
        name: "Kitchen Knife Set",
        price: 79.99,
        image: "https://images.pexels.com/photos/2249602/pexels-photo-2249602.jpeg",
        description: "Professional 8-piece knife set with high-carbon stainless steel blades and ergonomic handles. Includes wooden block.",
        category: "Kitchen"
    },
    {
        id: 17,
        name: "Instant Pot",
        price: 99.99,
        image: "https://images.pexels.com/photos/4518583/pexels-photo-4518583.jpeg",
        description: "Multi-functional pressure cooker that replaces 7 kitchen appliances. Perfect for quick and healthy meal preparation.",
        category: "Kitchen"
    },
    {
        id: 18,
        name: "Memory Foam Pillow",
        price: 35.99,
        image: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg",
        description: "Contoured memory foam pillow designed to support neck and spine alignment. Hypoallergenic with removable cover.",
        category: "Home"
    },
    {
        id: 19,
        name: "Weighted Blanket",
        price: 65.99,
        image: "https://images.pexels.com/photos/545034/pexels-photo-545034.jpeg",
        description: "15lb weighted blanket that promotes deeper sleep and reduces anxiety. Made with breathable bamboo fabric.",
        category: "Home"
    },
    {
        id: 20,
        name: "Fitness Tracker",
        price: 89.99,
        image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Tracks steps, sleep, and workouts.",
        category: "Fitness"
    },
    {
        id: 21,
        name: "Dumbbells Set",
        price: 149.99,
        image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
        description: "Adjustable dumbbell set ranging from 5-50 lbs each. Space-saving design perfect for home gym workouts.",
        category: "Fitness"
    },
    {
        id: 22,
        name: "Gaming Mouse",
        price: 69.99,
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
        description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons. 16,000 DPI sensor included.",
        category: "Gaming"
    },
    {
        id: 23,
        name: "Mechanical Keyboard",
        price: 119.99,
        image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
        description: "RGB mechanical keyboard with tactile switches and customizable lighting effects. Perfect for gaming and typing.",
        category: "Gaming"
    },
    {
        id: 24,
        name: "Webcam HD",
        price: 79.99,
        image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",
        description: "1080p HD webcam with auto-focus and noise-reducing microphone. Ideal for video calls and streaming.",
        category: "Electronics"
    },
    {
        id: 25,
        name: "Tablet Stand",
        price: 24.99,
        image: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg",
        description: "Adjustable tablet stand with multiple viewing angles. Compatible with tablets from 4 to 13 inches.",
        category: "Electronics"
    },
    {
        id: 26,
        name: "Travel Backpack",
        price: 89.99,
        image: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg",
        description: "Spacious travel backpack with multiple compartments and TSA-friendly laptop section. Water-resistant material.",
        category: "Travel"
    },
    {
        id: 27,
        name: "Portable Charger",
        price: 29.99,
        image: "https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg",
        description: "Compact 10,000mAh portable charger with dual USB ports and LED power indicator. Perfect for travel.",
        category: "Electronics"
    },
    {
        id: 28,
        name: "Smart Thermostat",
        price: 199.99,
        image: "https://images.pexels.com/photos/4996813/pexels-photo-4996813.jpeg",
        description: "Wi-Fi enabled smart thermostat with learning capabilities and energy-saving features. Control from anywhere.",
        category: "Home"
    }
];