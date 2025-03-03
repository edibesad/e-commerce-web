import { Product } from "@/types/product";

export const createSlug = (product: Product) => {
  return (
    product.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "-") // Özel karakterleri "-" ile değiştir
      .replace(/\s+/g, "-") // Boşlukları "-" ile değiştir
      .replace(/-+/g, "-") // Birden fazla "-" karakterini tek "-" yap
      .trim() +
    "-" +
    product.id
  );
};
