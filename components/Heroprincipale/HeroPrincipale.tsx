"use client";
import styles from "./hero.module.css";


export default function Hero() {

  return (
    <section className={styles.heroSplit}>
      {/* IMAGE */}
      <div
        className={styles.heroImg}
        role="img"
        aria-label="Audi RS7 de nuit"
      />

      {/* PANNEAU ROUGE */}
      <div className={styles.heroContent}>
        <h1 className={styles.titleMain}>Blogue</h1>
        <h2 className={styles.titleSub}>du AutoVibe</h2>

        <p className={styles.subtitle}>
          Bienvenue sur AutoVibe, votre source d'informations automobiles.
          Découvrez les dernières tendances, modèles et innovations du monde
          des voitures.
        </p>

        <div className={styles.buttonContainer}>
          <a href="/articles" className={styles.cta}>
            Voir tous les&nbsp;articles
          </a>
          <a href="/cars" className={styles.cta}>
            Voir toutes les&nbsp;voitures
          </a>
        </div>
      </div>
    </section>
  );
}