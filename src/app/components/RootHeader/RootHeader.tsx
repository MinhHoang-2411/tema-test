import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import HeaderActionButtons from "./HeaderActionButtons/HeaderActionButtons";
import Sidebar from "./Sidebar/Sidebar";
function RootHeader() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.logoImg}>
          <Image src="/icons/logo.png" fill objectFit="contain" alt="logo" />
        </div>
      </Link>
      {/* side bar  */}
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      {/* act btns  */}
      <HeaderActionButtons />
    </div>
  );
}

export default RootHeader;
