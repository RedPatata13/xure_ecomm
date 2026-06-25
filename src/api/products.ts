import { MOCK_PRODUCTS } from "../mock/products";
import type { Product } from "../types/product";

export async function fetchBestSellingProducts(limit? : number): Promise<Product[]> {
    await new Promise(res => setTimeout(res, 800));
    return limit ? MOCK_PRODUCTS.slice(0, limit) : MOCK_PRODUCTS;
}