const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }

  return data.token;
}
