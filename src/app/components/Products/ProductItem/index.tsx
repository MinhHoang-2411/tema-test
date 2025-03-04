"use client";
import { useCartStore } from "@/lib/zustand/store/cartStore";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ProductItemProps {
  productInfo: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
  handleOpenModal: (product: any) => void;
}

export default function ProductItem({ productInfo, handleOpenModal }: ProductItemProps) {
  const { addToCart } = useCartStore();
  const { id, name, price, imgUrl } = productInfo;

  return (
    <div className={styles.productItemContainer} onClick={() => handleOpenModal(productInfo)}>
      <h3>{name}</h3>
      <div className={styles.productImageContainer}>
        <Image src={imgUrl} alt={name} fill={true} objectFit="cover" />
      </div>

      <p className={styles.price}>${price}</p>
      <button onClick={() => addToCart({ id, name, price, quantity: 1 })}>Add to Cart</button>
    </div>
  );
}
