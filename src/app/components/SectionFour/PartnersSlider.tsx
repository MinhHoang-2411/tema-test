"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./styles.module.scss";

const partnersData = [
  { name: "partner-1", imgUrl: "/images/partner1.png" },
  { name: "partner-2", imgUrl: "/images/partner2.png" },
  { name: "partner-3", imgUrl: "/images/partner3.png" },
  { name: "partner-4", imgUrl: "/images/partner4.png" },
  { name: "partner-5", imgUrl: "/images/partner5.png" },
  { name: "partner-6", imgUrl: "/images/partner6.png" },
  { name: "partner-7", imgUrl: "/images/partner7.png" },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  swipeToSlide: true,
  loop: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function PartnersSlider() {
  const sliderRef = useRef<Slider | null>(null);
  return (
    <div className={styles.slideContainer}>
      <button className={styles.prevButton} onClick={() => sliderRef.current?.slickPrev()}>
        <Image src="/icons/arrow-square-left.png" alt="arrow-left" width={40} height={40} />
      </button>
      <button className={styles.nextButton} onClick={() => sliderRef.current?.slickNext()}>
        <Image src="/icons/arrow-square-right.png" alt="arrow-left" width={40} height={40} />
      </button>
      <Slider ref={sliderRef} {...sliderSettings}>
        {partnersData.map((data) => (
          <div className={styles.partnerImg} key={data.name}>
            <Image src={data.imgUrl} alt={data.name} fill objectFit="contain" />
          </div>
        ))}
      </Slider>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default PartnersSlider;
