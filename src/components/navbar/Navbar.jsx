import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import ThemeToggle from "../themeToggle/ThemeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 4,
    title: "Certificates",
    url: "/certificates",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <Link href="/" className={styles.logo}>
        KayessInternationals
      </Link> */}
      <Link href="/" className={styles.logo}>
        <Image
          src={logo}
          width={150}
          height={150}
          alt="Kayess Internationals"
          layout="fixed"
          objectFit="cover"
        />
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
