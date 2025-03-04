"use client";
import { useEffect, useState } from "react";
import { useProductStore } from "@/lib/zustand/store/productStore";
import ProductItem from "./ProductItem";
import styles from "./styles.module.scss";
import Modal from "../Modal/Modal";
import ProductDetail from "./ProductDetail";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  imgUrl: string;
}

export default function ProductList() {
  const { products, fetchProducts } = useProductStore();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.productListContainer}>
      <h1 className={styles.title}>Product List</h1>
      <div className="grid grid-flexible-columns">
        {products.map((product) => (
          <ProductItem key={product?.id} productInfo={product} handleOpenModal={handleOpenModal} />
        ))}
      </div>
      {/* product modal  */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedProduct && <ProductDetail productInfo={selectedProduct} />}
      </Modal>
    </div>
  );
}
