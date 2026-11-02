import productsData from "../data/products.json";
import type { Product } from "../types";

const products: Product[] = productsData;

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getCategories(): Promise<string[]> {
  return [...new Set(products.map((p) => p.category))];
}