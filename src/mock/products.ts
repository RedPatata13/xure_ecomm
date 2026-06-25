import type { Product } from "../types/product";

export const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 160, discount: 0.4, ratingsCount: 88, rating: 5, imagePath: "/products/gameConsole.svg", watched: true, liked: false },
    { id: 2, name: "AK-900 Wired Keyboard", price: 1160, discount: 0.35, ratingsCount: 75, rating: 4, imagePath: "products/keyboard.svg", watched: true, liked: false },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 400, discount: 0.3, ratingsCount: 99, rating: 4, imagePath: "/products/monitor.svg", watched: false, liked: true },
    { id: 4, name: "S-Series Comfort Chair", price: 375, discount: 0.25, ratingsCount: 99, rating: 4, imagePath: "/products/comfChair.svg", watched: true, liked: false },
    { id: 5, name: "The north coat", price: 260, discount: 0.1, ratingsCount: 120, rating: 5, imagePath: "/products/coat.svg", watched: false, liked: false },
    { id: 6, name: "Gucci duffle bag", price: 350, discount: 0.2, ratingsCount: 200, rating: 5, imagePath: "/products/gucci.svg", watched: true, liked: true },
    { id: 7, name: "RGB liquid CPU Cooler", price: 130, discount: 0.15, ratingsCount: 60, rating: 4, imagePath: "/products/cooler.svg", watched: false, liked: false },
    { id: 8, name: "Small Bookshelf", price: 1200, discount: 0.05, ratingsCount: 45, rating: 5, imagePath: "/products/bookshelf.svg", watched: true, liked: false },
];