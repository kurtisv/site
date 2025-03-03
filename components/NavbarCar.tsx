'use client';

// 📌 Importation des types `Dispatch` et `SetStateAction` depuis React
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/navbarcar.module.css";

// 📌 Définition de l'interface `NavbarCarProps`
// Cette interface définit les propriétés (props) que le composant `NavbarCar` va recevoir.
interface NavbarCarProps {
  // `setSearch` est une fonction qui permet de modifier l'état `search` dans `page.tsx`
  // Elle attend une valeur `string` en paramètre.
  setSearch: Dispatch<SetStateAction<string>>;

  // `setBrand` est une fonction qui met à jour l'état `brand` dans `page.tsx`
  // Elle attend une valeur `string` en paramètre.
  setBrand: Dispatch<SetStateAction<string>>;

  // `brands` est un tableau contenant les noms des marques disponibles.
  // Il est utilisé pour afficher dynamiquement les options du sélecteur de marque.
  brands: string[];
}


const NavbarCar: React.FC<NavbarCarProps> = ({ setSearch, setBrand, brands }) => {
  return (
    <div className={styles.navbarCar}>
      {/* Barre de recherche */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher d'un voiture..."
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>🔍</button>
      </div>

      {/* Sélecteur de marque dynamique */}
      <select className={styles.select} onChange={(e) => setBrand(e.target.value)}>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavbarCar;
