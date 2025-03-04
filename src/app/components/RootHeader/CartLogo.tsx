"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/zustand/store/cartStore";
import styles from "./styles.module.scss";
import { useClickOutside } from "@/app/hooks/useClickOutSide";
import { useRouter } from "next/navigation";

function CartLogo() {
  const router = useRouter();
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div ref={dropdownRef} className={styles.cartLogo}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={30} />
        {totalQuantity > 0 ? <span className={styles.cartBadge}>{totalQuantity}</span> : null}
      </div>
      {isOpen && (
        <div className={styles.cartPopup}>
          {totalQuantity > 0 ? (
            <>
              <p className={styles.cartPopupTitle}>{`You have ${totalQuantity} items`}</p>
              <button
                className={styles.goToCartBtn}
                onClick={() => {
                  router.push("/cart");
                  setIsOpen(false);
                }}
              >
                Go to cart
              </button>
            </>
          ) : (
            <p className={styles.cartPopupTitle}>Cart empty</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CartLogo;
