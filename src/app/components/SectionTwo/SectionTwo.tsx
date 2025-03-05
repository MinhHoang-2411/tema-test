import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const sectionTwoData = [
  {
    img: "/icons/sectionTwo/time.png",
    title: "24 - Hour",
    description: "24/7 description",
  },
  {
    img: "/icons/sectionTwo/design.png",
    title: "Design",
    description: "Design description",
  },
  {
    img: "/icons/sectionTwo/team.png",
    title: "Team",
    description: "Team description",
  },
];

function SectionTwo() {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.groupOneContainer}>
          <h2 className={styles.groupOneTitle}>{t("About Us")}</h2>
          <p className={styles.groupOneDescription}>{t("about us description")}</p>
          <div className={styles.usersAndGamesContainer}>
            <div className={styles.usersContainer}>
              <p className={styles.quantityText}>
                600<span className={styles.wordText}>M</span>+
              </p>
              <p className={styles.labelText}>{t("Users")}</p>
            </div>
            <div className={styles.gamesContainer}>
              <p className={styles.quantityText}>135+</p>
              <p className={styles.labelText}>{t("Games")}</p>
            </div>
          </div>
        </div>
        <div className={styles.groupTwoContainer}>
          <div className={styles.itemsContainer}>
            {sectionTwoData.map((data) => (
              <div key={data.title} className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                  <Image src={data.img} alt={data.title} fill objectFit="cover" />
                </div>

                <div className={styles.textContainer}>
                  <p className={styles.title}>{t(data.title)}</p>
                  <p className={styles.description}>{t(data.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.magicianContainer}>
        <img alt="magician-img" className={styles.magicianImg} src="/images/magician.png" />
        <img alt="map-img" className={styles.mapImg} src="/images/map.png" />
      </div>
    </div>
  );
}

export default SectionTwo;
