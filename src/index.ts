// src/index.ts

import { Product } from "./models/Product.ts";
import { getProducts } from "./services/apiService.ts";
import { calculateDiscount } from "./utils/discountCalculator.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { CustomError, handleError } from "./utils/errorHandler.ts";

async function runApp() {
  try {
    console.log("Fetching products from API...\n");

    // Fetch products asynchronously
    const products: Product[] = await getProducts();

    // Display each product with discount and tax
    products.forEach(product => {
      console.log("----- Product Details -----");
      product.displayDetails();

      const discount = calculateDiscount(product.price, product.discountPercentage);
      const tax = calculateTax(product.price, product.category);

      console.log(`Discount: $${discount}`);
      console.log(`Tax: $${tax}`);
      console.log(`Price after discount + tax: $${(product.price - discount + tax).toFixed(2)}\n`);
    });

  } catch (error) {
    console.error("Error encountered while running app:");
    console.error(handleError(error));
  }
}

// Run the application
runApp();