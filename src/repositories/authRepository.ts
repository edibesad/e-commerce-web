import { fetcher } from "@/lib/api";
const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

export const login = async (username: string, password: string) => {
  try {
    const data = await fetcher(API_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    return data;
  } catch (error) {
    return null;
  }
};
