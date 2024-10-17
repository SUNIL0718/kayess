import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import guar from "@/public/images/guar_meal.jpg";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
      </div>
      <div className={styles.itme}>
        <Image src={guar} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default page;
