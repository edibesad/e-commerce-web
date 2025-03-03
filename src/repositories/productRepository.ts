"use server";

import { fetcher } from "@/lib/api";
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

interface FetchProductsParams {
  limit?: number;
}

export const fetchProducts = async ({
  limit,
}: FetchProductsParams = {}): Promise<Product[] | null> => {
  try {
    const url = limit
      ? `${API_URL}/products?limit=${limit}`
      : `${API_URL}/products`;

    const data = await fetcher<Product[]>(url);

    if (!data) {
      return null;
    }

    return data.map((product: Product) => ({
      ...product,
    }));
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const fetchProduct = async (id: number): Promise<Product | null> => {
  try {
    const data = (await fetcher(`${API_URL}/products/${id}`)) as Product;

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const fetchCategories = async (): Promise<string[] | null> => {
  try {
    const data = (await fetcher(`${API_URL}/products/categories`)) as string[];

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[] | null> => {
  try {
    const data = (await fetcher(
      `${API_URL}/products/category/${category}`
    )) as Product[];

    if (!data) {
      return null;
    }

    const products = data.map((product: Product) => product);

    return products;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
