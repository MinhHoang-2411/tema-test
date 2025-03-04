"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";
import HeaderSearch from "./HeaderSearch";
import HeaderAuthBtns from "./HeaderAuthBtns";
import ClientOnly from "../ClientOnly";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button className={styles.sidebarToggle} onClick={() => setIsOpen(!isOpen)}>
        <Menu color="white" size={30} />
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <X color="white" />
        </button>
        <div className={styles.searchMobileContainer}>
          <HeaderSearch />
        </div>
        <ClientOnly>
          <div className={styles.authBtnsContainer}>
            <HeaderAuthBtns handleCloseSidebar={handleCloseSidebar} />
          </div>
        </ClientOnly>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
