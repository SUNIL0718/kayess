"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import GuarGum from "@/public/images/Guar-Gum.png";
import XanthanGum from "@/public/images/Xanthan-Gum.png";
import TragacanthGum from "@/public/images/Tragacanth-gum.png";
import GuarMeal from "@/public/images/Guar-Meal-Korma.png";
import RostedGuar from "@/public/images/Rosted-guar.png";
import GumArabica from "@/public/images/gum-arabica.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: GuarGum,
      title: "Guar Gum",
      description:
        "Guar Gum is a natural thickening agent used in various industries including food and cosmetics.",
    },
    {
      id: 2,
      image: XanthanGum,
      title: "Xanthan Gum",
      description:
        "Xanthan Gum is a versatile stabilizer and thickener, widely used in food and beverages.",
    },
    {
      id: 3,
      image: TragacanthGum,
      title: "Tragacanth Gum",
      description:
        "Tragacanth Gum is a natural emulsifier and thickener, known for its stabilizing properties.",
    },
    {
      id: 4,
      image: GuarMeal,
      title: "Guar Meal",
      description:
        "Tragacanth Gum is a natural emulsifier and thickener, known for its stabilizing properties.",
    },
    {
      id: 5,
      image: RostedGuar,
      title: "Rosted Guar",
      description:
        "Tragacanth Gum is a natural emulsifier and thickener, known for its stabilizing properties.",
    },
    {
      id: 6,
      image: GumArabica,
      title: "Gum Arabica",
      description:
        "Tragacanth Gum is a natural emulsifier and thickener, known for its stabilizing properties.",
    },
  ];

  return (
    <div className={styles.products_container}>
      {products.map((product) => (
        <div key={product.id} className={styles.product_card}>
          <div className={styles.card_inner}>
            {/* Front Side */}
            <div className={styles.card_front}>
              <Image
                src={product.image}
                alt={product.title}
                className={styles.product_image}
              />
              <h2 className={styles.product_title}>{product.title}</h2>
            </div>

            {/* Back Side */}
            <div className={styles.card_back}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
