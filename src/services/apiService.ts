// src/services/apiService.ts

import { Product, ProductData } from "../models/Product.ts";
import { CustomError, handleError } from "../utils/errorHandler.ts";

const BASE_URL = "https://dummyjson.com/products";

// Fetch products
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(BASE_URL);

    // Check if request was successful
    if (!response.ok) {
      throw new CustomError(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Convert rdata / Product objects
    return data.products.map((item: ProductData) => new Product(item));

  } catch (error) {
    // Handle and rethrow error
    throw new CustomError(handleError(error));
  }
}