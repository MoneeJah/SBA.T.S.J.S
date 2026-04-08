// src/models/Product.ts

import { calculateDiscount } from "../utils/discountCalculator.ts";;
import { calculateTax } from "../utils/taxCalculator.ts";

// Define a type for strong TypeScript usage
export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;

  constructor(data: ProductData) {
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
  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    return Number((this.price - discountAmount).toFixed(2));
  }

  // 📦 Displays product details clearly
  displayDetails(): void {
    const discount = calculateDiscount(this.price, this.discountPercentage);
    const discountedPrice = this.getPriceWithDiscount();
    const tax = calculateTax(this.price, this.category);
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