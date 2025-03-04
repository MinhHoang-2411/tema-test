import React from "react";
import styles from "./styles.module.scss";
import QuantitySelector from "../../QuantitySelector";
import { useCartStore } from "@/lib/zustand/store/cartStore";

type IProductDetailProps = {
  productInfo: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    stock: number;
  };
};

export default function ProductDetail({ productInfo }: IProductDetailProps) {
  console.log({ productInfo });
  const { id, name, price, imgUrl, stock } = productInfo;
  const { addToCart } = useCartStore();

  const handleAddToCart = (quantity: number) => {
    addToCart({ id, name, price, quantity });
  };

  return (
    <div className={styles.productDetailContainer}>
      <img className={styles.productImage} src={imgUrl} />
      <div className={styles.productInfoContainer}>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <QuantitySelector onSubmit={handleAddToCart} />
      </div>
    </div>
  );
}
