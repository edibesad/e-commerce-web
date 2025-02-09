import { fetcher } from "@/lib/api";
import { Cart } from "@/types/cart";

const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

export const fetchCartByUserId = async (userId: number): Promise<Cart> => {
  const data = (await fetcher(`${API_URL}/carts/${userId}`)) as Cart;

  return {
    ...data,
  };
};
