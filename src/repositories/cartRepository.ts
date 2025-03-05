import { fetcher } from "@/lib/api";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

export const fetchCartByUserId = async (userId: number): Promise<Cart> => {
  const data = (await fetcher(`${API_URL}/carts/${userId}`)) as Cart;

  return {
    ...data,
  };
};

export const fetchCardFromLocalStorage = (): Cart => {
  const cart = localStorage.getItem("cart");
  return cart
    ? JSON.parse(cart)
    : {
        userId: -1,
        products: [],
        id: -1,
        date: "",
      };
};

export const addProductToCart = (product: Product) => {
  const cart = fetchCardFromLocalStorage();
  cart.products.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};
