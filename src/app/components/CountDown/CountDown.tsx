"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const t = useTranslations("HomePage");

  const formatNumber = (num: number) => String(num).padStart(2, "0");
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (Object.values(timeLeft).every((t) => t === "00")) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className={styles.countDownContainer}>
      <div className={styles.timeBox}>
        <h2 className={styles.timeNumber}>{timeLeft.days}</h2>
        <p className={styles.timeLabel}>{t("Days")}</p>
      </div>
      <p className={styles.timeDivider}>:</p>
      <div className={styles.timeBox}>
        <h2 className={styles.timeNumber}>{timeLeft.hours}</h2>
        <p className={styles.timeLabel}>{t("Hours")}</p>
      </div>
      <p className={styles.timeDivider}>:</p>
      <div className={styles.timeBox}>
        <h2 className={styles.timeNumber}>{timeLeft.minutes}</h2>
        <p className={styles.timeLabel}>{t("Minutes")}</p>
      </div>
      <p className={styles.timeDivider}>:</p>
      <div className={styles.timeBox}>
        <h2 className={styles.timeNumber}>{timeLeft.seconds}</h2>
        <p className={styles.timeLabel}>{t("Seconds")}</p>
      </div>
    </div>
  );
};

export default Countdown;
