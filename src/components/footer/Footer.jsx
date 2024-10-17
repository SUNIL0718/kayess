import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import facebook from "@/public/images/facebook.png";
import instagram from "@/public/images/instagram.png";
import twitter from "@/public/images/twitter.png";

const Footer = () => {
  // console.log("Hello");
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        {" "}
        © 2024 Kayess Internationals. All rights reserved.
      </div>
      <div className={styles.social}>
        <span className={styles.follow}>Follow Us:</span>
        <Image
          src={facebook}
          width={20}
          height={20}
          className={styles.icon}
          alt="Facebook"
        />
        <Image
          src={instagram}
          width={20}
          height={20}
          className={styles.icon}
          alt="Instagram"
        />
        <Image
          src={twitter}
          width={20}
          height={20}
          className={styles.icon}
          alt="Twitter"
        />
      </div>
    </div>
  );
};

export default Footer;
