"use strict";
// src/utils/taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// Calculates tax amount based on category
function calculateTax(price, category) {
    const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
    return Number((price * taxRate).toFixed(2));
}
// console.log(calculateTax(100, "electronics"));
//# sourceMappingURL=taxCalculator.js.map