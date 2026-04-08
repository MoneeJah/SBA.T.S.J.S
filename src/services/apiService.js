"use strict";
// src/services/apiService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
const Product_1 = require("../models/Product");
const errorHandler_1 = require("../utils/errorHandler");
const BASE_URL = "https://dummyjson.com/products";
// Fetch products
async function getProducts() {
    try {
        const response = await fetch(BASE_URL);
        // Check if request was successful
        if (!response.ok) {
            throw new errorHandler_1.CustomError(`API Error: ${response.status}`);
        }
        const data = await response.json();
        // Convert raw data → Product objects
        return data.products.map((item) => new Product_1.Product(item));
    }
    catch (error) {
        // Handle and rethrow error
        throw new errorHandler_1.CustomError((0, errorHandler_1.handleError)(error));
    }
}
//# sourceMappingURL=apiService.js.map