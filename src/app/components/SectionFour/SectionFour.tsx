import React from "react";
import PartnersSlider from "./PartnersSlider";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

function SectionFour() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{t("Our Partners")}</h2>
        <PartnersSlider />
      </div>
    </div>
  );
}

export default SectionFour;
