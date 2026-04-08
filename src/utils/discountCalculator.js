"use strict";
// src/utils/taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// Calculates the tax amount based on product category
function calculateTax(price, category) {
    // Determine tax rate
    const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
    // Calculate tax amount
    const taxAmount = price * taxRate;
    // Return rounded value
    return Number(taxAmount.toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map