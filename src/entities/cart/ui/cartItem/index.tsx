import { FC } from "react";
import { ICartProduct } from "../../../../shared/types";
import "./style.css";
import Delete from "../../../../shared/constans/icons/delete.svg";
import Minus from "../../../../shared/constans/icons/minus.svg";
import Plus from "../../../../shared/constans/icons/plus.svg";
import { handleBuy } from "../../../../shared/lib/handleBuy";
import { handleDelete } from "../../../../shared/lib/handleDelete";
import { handleRemove } from "../../../../shared/lib/handleRemove";

const CartItem: FC<ICartProduct> = ({ img, price, title, count, id }) => {
  return (
    <div className={"cartItemCard"}>
      <div className={"cartItem"}>
        <img className={"cartItemImg"} src={img} alt={"Наушники"} />
        <div className={"cartItemDescription"}>
          <p className={"cartItemTitle"}>{title}</p>
          <p className={"cartItemPrice"}>{price} ₽</p>
        </div>
        <button
          className={"cartItemDelete"}
          onClick={() => {
            handleDelete({ id });
          }}
        >
          <img className={"cartItemIcon"} src={Delete} alt={"Удалить"} />
        </button>
        <p className={"cartItemTotalPrice"}>{price * count} ₽</p>
        <div className={"cartItemCount"}>
          <button
            className={"buttonCount"}
            onClick={() => {
              handleRemove({ id });
            }}
          >
            <img className={"buttonCountIcon"} src={Minus} alt={"Минус"} />
          </button>
          <p className={"count"}>{count}</p>
          <button
            className={"buttonCount"}
            onClick={() => {
              handleBuy({ img, id, title, price });
            }}
          >
            <img className={"buttonCountIcon"} src={Plus} alt={"Плюс"} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
