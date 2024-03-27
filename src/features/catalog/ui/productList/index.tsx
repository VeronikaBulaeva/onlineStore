import { FC } from "react";
import "../../../../widgets/catalog/ui/headphones/style.css";
import { products } from "../../../../shared/constans/mockData/products";
import ProductCard from "../../../../entities/catalog/ui/productCard";
import { HeadPhoneType } from "../../../../shared/types";

interface IProductList {
  productType: HeadPhoneType;
}

const ProductList: FC<IProductList> = ({ productType }) => {
  return (
    <div className={"productListItem"}>
      {products
        .filter(({ type }) => type === productType)
        .map(({ img, oldPrice, price, type, rate, title, id }) => (
          <ProductCard
            key={`productCard${id}`}
            id={id}
            img={img}
            title={title}
            price={price}
            rate={rate}
            type={type}
            oldPrice={oldPrice}
          />
        ))}
    </div>
  );
};
export default ProductList;
