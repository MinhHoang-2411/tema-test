import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

function RootFooter() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.topFooterContainer}>
        <div className={styles.content}>
          <div className={styles.socialContainer}>
            <div className={`${styles.imageWrapper} ${styles.logoImg}`}>
              <Image src="/icons/logo.png" alt="logo" fill objectFit="contain" />
            </div>
            <div className={styles.socialLogos}>
              <div className={`${styles.imageWrapper} ${styles.socialImg}`}>
                <Image src="/icons/twitter.png" alt="logo" fill objectFit="contain" />
              </div>
              <div className={`${styles.imageWrapper} ${styles.socialImg}`}>
                <Image src="/icons/facebook.png" alt="logo" fill objectFit="contain" />
              </div>
              <div className={`${styles.imageWrapper} ${styles.socialImg}`}>
                <Image src="/icons/linkedin.png" alt="logo" fill objectFit="contain" />
              </div>
            </div>
          </div>
          <div className={styles.otherInformationContainer}>
            <div className={styles.addressBlockContainer}>
              <p className={styles.title}>{t("Address")}</p>
              <div className={styles.locationContainer}>
                <div className={`${styles.imageWrapper} ${styles.infoImg}`}>
                  <Image src="/icons/location.png" alt="logo" fill objectFit="contain" />
                </div>
                <div className={styles.locationInfoContainer}>
                  <p>{t("Address description one")}</p>
                  <p>{t("Address description two")}</p>
                </div>
              </div>
              <div className={styles.contactContainer}>
                <div className={`${styles.imageWrapper} ${styles.infoImg}`}>
                  <Image src="/icons/contact.png" alt="logo" fill objectFit="contain" />
                </div>
                <p>
                  (+1) 555-0108-000 <span>{t("or")}</span> (+236) 555-0108
                </p>
              </div>
            </div>
            <div className={styles.subscribeBlockContainer}>
              <p className={styles.title}>{t("Subscribe")}</p>
              <div className={styles.subscribeContent}>
                <p>{t("Subscribe description")}</p>
                <div className={styles.inputContainer}>
                  <input placeholder={t("Enter your email")} />
                  <button>
                    <Image
                      src="/icons/arrow-right-white.png"
                      width={24}
                      height={24}
                      alt="arrow-right"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooterContainer}>2017 Copyright. Policy.</div>
    </div>
  );
}

export default RootFooter;
