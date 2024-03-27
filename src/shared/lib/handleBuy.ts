import { ICartProduct } from "../types";

export const handleBuy = ({
  img,
  title,
  price,
  id,
}: Omit<ICartProduct, "count">) => {
  const cart: ICartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const product = cart.find((e) => e.id === id);
  if (product) {
    product.count += 1;
    localStorage.setItem("cart", JSON.stringify([...cart]));
  } else {
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { img, title, price, id, count: 1 }]),
    );
  }
  window.dispatchEvent(new Event("cart"));
};
