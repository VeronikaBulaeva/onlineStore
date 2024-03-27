import { useEffect, useState } from "react";
import { ICartProduct } from "../types";

export const useCart = () => {
  const [cart, setCart] = useState<ICartProduct[]>(
    JSON.parse(localStorage.getItem("cart") ?? "[]"),
  );
  useEffect(() => {
    window.addEventListener("cart", () => {
      const updatedCart: ICartProduct[] = JSON.parse(
        localStorage.getItem("cart") ?? "[]",
      );
      setCart(updatedCart);
    });
    return () => {
      window.removeEventListener("cart", () => {
        const updatedCart: ICartProduct[] = JSON.parse(
          localStorage.getItem("cart") ?? "[]",
        );
        setCart(updatedCart);
      });
    };
  }, []);
  return cart;
};
