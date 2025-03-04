"use client"; // Important pour Next.js

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import Button from "./Button";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          🚗 AutoVibe
        </Link>

        {/* Navigation : Toujours visible sur desktop, affichable sur mobile */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Accueil
          </Link>
          <Link href="/cars" className={pathname === "/cars" ? styles.active : ""}>
            Voitures
          </Link>
          <Link href="/articles" className={pathname === "/articles" ? styles.active : ""}>
            Articles
          </Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
            À propos
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className={styles.headerCta}>
          <Button variant="primary">Enregistrer ma voiture</Button>
        </div>

        {/* Bouton Menu Burger (seulement en version mobile) */}
        <button 
          className={styles.burgerMenu} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
