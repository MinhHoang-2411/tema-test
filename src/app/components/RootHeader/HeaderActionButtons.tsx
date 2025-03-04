"use client";

import React from "react";
import styles from "./styles.module.scss";
import CartLogo from "./CartLogo";
import ClientOnly from "../ClientOnly";
import HeaderAuthBtns from "./HeaderAuthBtns";

function HeaderActionButtons() {
  return (
    <div className={styles.actsBtnContainer}>
      <ClientOnly>
        <CartLogo />
        <HeaderAuthBtns />
      </ClientOnly>
    </div>
  );
}

export default HeaderActionButtons;
