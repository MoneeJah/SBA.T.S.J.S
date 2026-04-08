// src/utils/taxCalculator.ts

// Calculates tax amount based on category
export function calculateTax(price: number, category: string): number {
  const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
  return Number((price * taxRate).toFixed(2));
}

// console.log(calculateTax(100, "electronics"));