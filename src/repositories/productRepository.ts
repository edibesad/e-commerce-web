import { fetcher } from "@/lib/api";
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

interface FetchProductsParams {
  limit?: number;
}

export const fetchProducts = async ({
  limit,
}: FetchProductsParams = {}): Promise<Product[]> => {
  const url = limit
    ? `${API_URL}/products?limit=${limit}`
    : `${API_URL}/products`;

  const data = (await fetcher(url)) as Product[];

  return data.map((product: Product) => ({
    ...product,
  }));
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const data = (await fetcher(`${API_URL}/products/${id}`)) as Product;

  return {
    ...data,
  };
};

export const fetchCategories = async (): Promise<string[]> => {
  const data = (await fetcher(`${API_URL}/products/categories`)) as string[];

  return data;
};

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const data = (await fetcher(
    `${API_URL}/products/category/${category}`
  )) as Product[];

  return data.map((product: Product) => ({
    ...product,
  }));
};
