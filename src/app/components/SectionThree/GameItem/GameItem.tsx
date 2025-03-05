import Image from "next/image";
import styles from "./styles.module.scss";
type IGameItemProps = {
  item: {
    img: string;
    title: string;
    description: string;
  };
};

function GameItem({ item }: IGameItemProps) {
  return (
    <div className={styles.gridItem}>
      <div className={styles.gameImage}>
        <Image src={item.img} fill objectFit="cover" alt="game-img" />
      </div>
      <div className={styles.gameTextContainer}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
}

export default GameItem;
