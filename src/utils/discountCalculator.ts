// src/utils/taxCalculator.ts

// Calculates the tax amount based on product category
export function calculateTax(price: number, category: string): number {
  // Determine tax rate
  const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;

  // Calculate tax amount
  const taxAmount = price * taxRate;

  // Return rounded value
  return Number(taxAmount.toFixed(2));
}