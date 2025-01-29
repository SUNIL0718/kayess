"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import guargum from "@/public/images/slide1.jpg";
import xanthamgum from "@/public/images/slide2.jpg";
import tragacanthgum from "@/public/images/slide3.jpg";
import styles from "./slider.module.css";

const slides = [
  {
    id: 1,
    title: "Guar Gum",
    description:
      "Guar gum is a natural, edible thickening agent that comes from the seeds of the guar plant, a member of the legume family.",
    img: guargum,
    url: "/",
  },
  {
    id: 2,
    title: "Xanthan Gum",
    description:
      "Xanthan gum is a nontoxic, biodegradable, and hydrophilic polymer that is made by fermenting simple sugars with the bacterium Xanthomonas campestris. It is soluble in both cold and hot water, and is stable over a wide range of pH values.",
    img: xanthamgum,
    url: "/",
  },
  {
    id: 3,
    title: "Tragacanth Gum",
    description:
      "A viscous polysaccharide mixture that's slightly acidic and exists as calcium, magnesium, and sodium salts.",
    img: tragacanthgum,
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlides}>
        {slides.map((slide, index) => (
          <div
            className={`${styles.slide} ${
              index === current ? styles.active : styles.inactive
            }`}
            key={slide.id}
          >
            <div className={styles.content}>
              <div className={styles.textContainer}>
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                <p className={styles.slideDescription}>{slide.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  className={styles.slideImage}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={goToPrevious}>
          &#8249;
        </button>
        <button className={styles.nextButton} onClick={goToNext}>
          &#8250;
        </button>
      </div>
      <div className={styles.dotIndicators}>
        {slides.map((_, index) => (
          <div
            className={`${styles.dotIndicator} ${
              current === index ? styles.activeDot : ""
            }`}
            key={index}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
