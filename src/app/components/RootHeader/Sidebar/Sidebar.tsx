"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Sidebar = () => {
  const t = useTranslations("HomePage");
  const actionsLinkData = [
    {
      label: t("ABOUT US"),
      link: "/",
    },
    {
      label: t("GAMES"),
      link: "/",
    },
    {
      label: t("PARTNERS"),
      link: "/",
    },
    {
      label: t("CONTACT US"),
      link: "/",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button className={styles.sidebarToggle} onClick={() => setIsOpen(!isOpen)}>
        <Image src="/icons/menu.png" width={40} height={40} alt="menu-img" />
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.topContent}>
          <LanguageSwitcher />
          <button className={styles.closeBtn} onClick={handleCloseSidebar}>
            <Image src="/icons/close.png" width={40} height={40} alt="menu-img" />
          </button>
        </div>
        <div className={styles.bottomContent}>
          {actionsLinkData.map((data, id) => (
            <button
              className={`${styles.linkMobile} ${id !== actionsLinkData.length - 1 ? styles.hasDivider : ""}`}
              key={id}
              onClick={handleCloseSidebar}
            >
              <Link href={data.link}>{data.label}</Link>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={handleCloseSidebar} />}
    </>
  );
};

export default Sidebar;
