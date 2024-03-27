import { ICartProduct } from "../types";

export const handleDelete = ({ id }: Pick<ICartProduct, "id">) => {
  const cart: ICartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const product = cart.filter((e) => e.id !== id);
  localStorage.setItem("cart", JSON.stringify(product));
  if (product.length === 0) {
    localStorage.removeItem("cart");
  }
  window.dispatchEvent(new Event("cart"));
};
