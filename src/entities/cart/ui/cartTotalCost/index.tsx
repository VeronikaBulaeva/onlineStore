import { FC } from "react";
import "./style.css";

interface ICartTotalCost {
  totalCost: number;
}

const CartTotalCost: FC<ICartTotalCost> = ({ totalCost }) => {
  return (
    <div className={"cartTotalCostBlock"}>
      <div className={"totalCost"}>
        <p className={"totalCostTitle"}>итого</p>
        <p className={"totalCostPrice"}>₽ {totalCost}</p>
      </div>
      <button className={"totalCostButton"}>Перейти к оформлению</button>
    </div>
  );
};
export default CartTotalCost;
