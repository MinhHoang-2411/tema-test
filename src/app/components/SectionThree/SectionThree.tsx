import React from "react";
import styles from "./styles.module.scss";
import GameItem from "./GameItem/GameItem";
import { useTranslations } from "next-intl";

const items = [
  {
    img: "/images/game1.png",
    title: "E-Space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 1",
  },
  {
    img: "/images/game2.png",
    title: "Pirates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 2",
  },
  {
    img: "/images/game3.png",
    title: "Magic tree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 3",
  },
  {
    img: "/images/game4.png",
    title: "Kingland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 4",
  },
  {
    img: "/images/game5.png",
    title: "Witch Party",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 5",
  },
  {
    img: "/images/game6.png",
    title: "Aborigines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 6",
  },
  {
    img: "/images/game7.png",
    title: "The Last Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 7",
  },
  {
    img: "/images/game8.png",
    title: "Rocky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 8",
  },
  {
    img: "/images/game9.png",
    title: "Cinderella",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 9",
  },
  {
    img: "/images/game10.png",
    title: "G-Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 10",
  },
  {
    img: "/images/game11.png",
    title: "Blue Fire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 11",
  },
  {
    img: "/images/game12.png",
    title: "Egypt Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 12",
  },
];

function SectionThree() {
  const t = useTranslations("HomePage");

  const columns = Array.from({ length: 4 }, (_, i) => items.slice(i * 3, i * 3 + 3));
  return (
    <div className="container">
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>{t("Our Games")}</h2>
        <p className={styles.description}>{t("Our games description")}</p>
      </div>
      <div className={styles.gridContainer}>
        {columns.map((column, colIdx) => (
          <div key={colIdx} className={styles.gridColumn}>
            {column.map((item, idx) => (
              <GameItem key={idx} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionThree;
