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
export declare class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    constructor(data: ProductData);
    getPriceWithDiscount(): number;
    displayDetails(): void;
}
//# sourceMappingURL=Product.d.ts.map