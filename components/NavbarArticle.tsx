"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "../styles/navbararticle.module.css";

interface NavbarArticleProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

const NavbarArticle: React.FC<NavbarArticleProps> = ({ setSearch }) => {
  return (
    <div className={styles.navbarArticle}>
      {/* Barre de recherche */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher un article..."
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>🔍</button>
      </div>
    </div>
  );
};

export default NavbarArticle;
