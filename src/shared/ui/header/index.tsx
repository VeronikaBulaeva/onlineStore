import { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LikeIcon from "../../constans/icons/like.svg";
import CartIcon from "../../constans/icons/cart.svg";
import { CART_ROUTE, CATALOG_ROUTE } from "../../constans/routes/routes";
import { useCart } from "../../lib/useCart";

const Header: FC = () => {
  const cart = useCart();
  const cartLength = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <section className={"containerHeader"}>
      <div className={"headerContent"}>
        <Link to={CATALOG_ROUTE}>
          <p className={"siteName"}>QPICK</p>
        </Link>
        <div className={"headerIcons"}>
          <Link to={""}>
            <img className={"likeIcon"} src={LikeIcon} alt={"Нравится"} />
          </Link>
          <Link to={CART_ROUTE}>
            <img className={"cartIcon"} src={CartIcon} alt={"Корзина"} />
            <div className={"cartLength"}>{cartLength}</div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Header;
