"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useClickOutside } from "@/app/hooks/useClickOutSide";
import { useState } from "react";

function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const pathnameWithoutLocale = pathname.split("/").slice(2).join("/") || "";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div ref={dropdownRef} className={styles.switcherLanguageContainer}>
      <div className={styles.flagLanguageContainer} onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={locale === "en" ? "/icons/flags/us.png" : "/icons/flags/vietnam.png"}
          width={33}
          height={33}
          alt={locale}
        />
        <div className={styles.arrowDown}></div>
      </div>
      {isOpen && (
        <div className={styles.switcherPopupContainer}>
          <Link href={`/en/${pathnameWithoutLocale}`}>
            <div className={styles.languageItemContainer}>
              {locale === "en" ? (
                <Image src="/icons/tick.png" alt="tick" width={24} height={24} />
              ) : (
                <div className={styles.tickContainer}>{""}</div>
              )}
              <div className={styles.flagContainer}>
                <Image src={"/icons/flags/us.png"} width={33} height={33} alt={locale} />
                <p>English</p>
              </div>
            </div>
          </Link>
          <div className={styles.divider}>{""}</div>
          <Link href={`/vi/${pathnameWithoutLocale}`}>
            <div className={styles.languageItemContainer}>
              {locale === "vi" ? (
                <Image src="/icons/tick.png" alt="tick" width={24} height={24} />
              ) : (
                <div className={styles.tickContainer}>{""}</div>
              )}
              <div className={styles.flagContainer}>
                <Image src={"/icons/flags/vietnam.png"} width={33} height={33} alt={locale} />
                <p>Vietnamese</p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
