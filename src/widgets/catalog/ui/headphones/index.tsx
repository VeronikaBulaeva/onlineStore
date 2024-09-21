import { FC } from "react";
import ProductList from "../../../../features/catalog/ui/productList";
import { HeadPhoneType } from "../../../../shared/types";
import "./style.css";

const Headphones: FC = () => {
  return (
    <div className="productList">
      <div className="productListContainer">
        <p className="productListTitle">Наушники</p>
        <ProductList productType={HeadPhoneType.wired} />

        <p className="productListTitle">Беспроводные наушники</p>
        <ProductList productType={HeadPhoneType.wireless} />
      </div>
    </div>
  );
};
export default Headphones;
