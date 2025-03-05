"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop < 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    if (isAtTop) {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className={styles.scrollButton} onClick={scrollTo}>
      <div className={`${styles.scrollImg} ${isAtTop ? styles.scrollDown : styles.scrollUp}`}>
        <Image src="/icons/arrow-circle-up.png" fill objectFit="contain" alt="arrow-img" />
      </div>
    </button>
  );
}
