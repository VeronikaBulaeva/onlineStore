import { FC } from "react";
import { IProduct } from "../../../../shared/types";
import Star from "../../../../shared/constans/icons/star.svg";
import "./style.css";
import { handleBuy } from "../../../../shared/lib/handleBuy";

const ProductCard: FC<IProduct> = ({
  img,
  rate,
  title,
  price,
  oldPrice,
  id,
}) => {
  return (
    <div className={"productCard"}>
      <div className={"productCardImg"}>
        <img src={img} alt={title} />
      </div>
      <div className={"productCardDescription"}>
        <p className={"productCardTitle"}>{title}</p>
        <div className={"productCardPrices"}>
          <p className={"productCardPrice"}>{price} ₽</p>
          {oldPrice ? (
            <p className={"productCardOldPrice"}>{oldPrice} ₽</p>
          ) : null}
        </div>
        <div className={"productCardRate"}>
          <img src={Star} className={"rateIcon"} alt={"Звезда"} />
          <p className={"productCardRateNumber"}>{rate}</p>
        </div>

        <button
          className={"productCardBuyButton"}
          onClick={() => {
            handleBuy({ img, id, title, price });
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
