const API_URL = process.env.NEXT_PUBLIC_API_URL; //https://fakestoreapi.com

export async function fetchUserById({ id }: { id: number }) {
  const res = await fetch(`${API_URL}/users/` + id);

  if (!res.ok) {
    throw new Error("Kullanıcı bilgisi alınamadı");
  }

  const data = await res.json();
  return data;
}
