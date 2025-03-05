"use client";

import React from "react";
import styles from "./styles.module.scss";
import ClientOnly from "../../ClientOnly";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function HeaderActionButtons() {
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

  return (
    <div className={styles.actsBtnContainer}>
      <ClientOnly>
        {actionsLinkData.map((data, id) => (
          <button className={styles.actBtn} key={id}>
            <Link href={data.link}>{data.label}</Link>
          </button>
        ))}
        <LanguageSwitcher />
      </ClientOnly>
    </div>
  );
}

export default HeaderActionButtons;
