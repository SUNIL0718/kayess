"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
import { ThemeContext } from "../context/ThemeContext";
import moon from "@/public/images/moon.png";
import sun from "@/public/images/sun.png";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={sun} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
