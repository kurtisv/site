"use client"; // Important pour Next.js

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import { LogoAutoVibe3 } from "./Logo";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour afficher/cacher le menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <LogoAutoVibe3 />
        </Link>

        {/* Bouton Menu Burger (seulement en version mobile) */}
        <button className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation : Toujours visible sur desktop, affichable sur mobile */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <Link href="/cars" className={pathname === "/cars" ? styles.active : ""}>
          Voitures
        </Link>
        <Link href="/articles" className={pathname === "/articles" ? styles.active : ""}>
          Articles
        </Link>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
          A propos
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
