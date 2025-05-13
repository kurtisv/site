"use client";
import styles from "../../styles/globals.module.css";
import Text from "@/components/Text";   

export default function Heropropos() {
    return(
        <section className={styles.introSection}>
                <Text as="h2" variant="subtitle">🔧 À propos</Text>
                <ul className={styles.list}>
                  <li>📌 Un catalogue de voitures avec des fiches détaillées et des images haute qualité.</li>
                  <li>📰 Un blog avec des actualités et des analyses sur les nouvelles sorties automobiles.</li>
                  <li>🚗 Un espace pour soumettre et afficher votre propre véhicule.</li>
                </ul>
              </section>
    )
}