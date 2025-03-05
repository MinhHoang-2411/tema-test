import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import Countdown from "../CountDown/CountDown";
import ClientOnly from "../ClientOnly";

function SectionOne() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.sectionOneContainer}>
      <div className={styles.fairyImgContainer}>
        <div className={styles.fairyImg}>
          <Image src="/images/fairy.png" fill objectFit="cover" alt="fairy-img" />
        </div>
        <div className={styles.fairyImgMobile}>
          <Image src="/images/fairy-mobile.png" fill objectFit="cover" alt="fairy-img" />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <h1>{t("We’re Getting Ready")}</h1>
        <ClientOnly>
          <Countdown targetDate={new Date("2025-03-31T23:59:59")} />
        </ClientOnly>
        <div className={styles.contactSectionContainer}>
          <div className={styles.contactSectionContent}>
            <p>{t("section one description")}</p>
            <div className={styles.inputContainer}>
              <input placeholder={t("Enter your email")} />
              <button>
                <Image src="/icons/arrow-right.png" width={24} height={24} alt="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
