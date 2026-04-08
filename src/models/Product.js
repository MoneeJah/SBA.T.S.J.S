"use strict";
// src/models/Product.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const discountCalculator_ts_1 = require("../utils/discountCalculator.ts");
;
const taxCalculator_ts_1 = require("../utils/taxCalculator.ts");
class Product {
    id;
    title;
    description;
    price;
    discountPercentage;
    rating;
    stock;
    brand;
    category;
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.brand = data.brand;
        this.category = data.category;
    }
    // 💸 Returns final price AFTER discount
    getPriceWithDiscount() {
        const discountAmount = (0, discountCalculator_ts_1.calculateDiscount)(this.price, this.discountPercentage);
        return Number((this.price - discountAmount).toFixed(2));
    }
    // 📦 Displays product details clearly
    displayDetails() {
        const discount = (0, discountCalculator_ts_1.calculateDiscount)(this.price, this.discountPercentage);
        const discountedPrice = this.getPriceWithDiscount();
        const tax = (0, taxCalculator_ts_1.calculateTax)(this.price, this.category);
        const finalPrice = discountedPrice + tax;
        console.log("---- Product Details ----");
        console.log(`Title: ${this.title}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Category: ${this.category}`);
        console.log(`Original Price: $${this.price}`);
        console.log(`Discount: $${discount}`);
        console.log(`Price After Discount: $${discountedPrice}`);
        console.log(`Tax: $${tax}`);
        console.log(`Final Price: $${finalPrice.toFixed(2)}`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Stock: ${this.stock}`);
        console.log("-------------------------\n");
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map