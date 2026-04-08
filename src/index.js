"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product.ts");
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator.ts");
const taxCalculator_1 = require("./utils/taxCalculator.ts");
const errorHandler_1 = require("./utils/errorHandler.ts");
async function runApp() {
    try {
        console.log("Fetching products from API...\n");
        // Fetch products asynchronously
        const products = await (0, apiService_1.getProducts)();
        // Display each product with discount and tax
        products.forEach(product => {
            console.log("----- Product Details -----");
            product.displayDetails();
            const discount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountPercentage);
            const tax = (0, taxCalculator_1.calculateTax)(product.price, product.category);
            console.log(`Discount: $${discount}`);
            console.log(`Tax: $${tax}`);
            console.log(`Price after discount + tax: $${(product.price - discount + tax).toFixed(2)}\n`);
        });
    }
    catch (error) {
        console.error("Error encountered while running app:");
        console.error((0, errorHandler_1.handleError)(error));
    }
}
// Run the application
runApp();
//# sourceMappingURL=index.js.map