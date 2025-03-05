"use client";

import {
  fetchCardFromLocalStorage,
  fetchCartByUserId,
} from "@/repositories/cartRepository";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

export default function Cart() {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    const handleCart = async () => {
      try {
        const onlineCart = await fetchCartByUserId(1);
        const localCart = fetchCardFromLocalStorage();

        console.log("onlineCart", onlineCart);

        const mergedCart = [
          ...(onlineCart?.products || []),
          ...(localCart?.products || []),
        ];

        console.log("mergedCart", mergedCart);

        const productMap = new Map<number, CartProduct>();

        mergedCart.forEach((product) => {
          if (!product) return;
          if (productMap.has(product.id)) {
            productMap.get(product.id)!.quantity += 1;
          } else {
            productMap.set(product.id, { ...product, quantity: 1 });
          }
        });

        setProducts(Array.from(productMap.values()));
      } catch (error) {
        console.error("Sepet yüklenirken hata oluştu:", error);
      }
    };

    handleCart();
  }, []);

  return (
    <div>
      <h1>Sepetim</h1>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
