export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    console.log("url", url);
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("API request failed");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}
