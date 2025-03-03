import MainLayout from "../layouts/MainLayout";
import ArticlesindexList from "../components/ArticlesindexList";
import CarsindexList from "../components/CarsindexList";
import BlogLayout from "@/layouts/BlogLayout";
import SubCarLayout from "@/layouts/SubCarLayout";
import styles from "../styles/globals.module.css";
import Text from "@/components/Text"; 

export default function Home() {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <Text as="h1" variant="title" className={styles.fadeIn}>
          Blogue <br />
        </Text>
        <Text as="h1" variant="title2" className={styles.fadeIn}>
          du AutoVibe
        </Text>
        <Text as="h2" variant="subtitle" className={styles.fadeIn}>
          Bienvenue sur AutoVibe <br /> votre destination ultime pour l'univers automobile ! <br />
          Plongez dans notre blogue et explorez les dernières voitures et articles qui font vibrer la route.
        </Text>
      </section>

      {/* Conteneur en grille pour organiser les sections */}
      <div className={styles.layoutGrid}>
        {/* Section Voitures */}
        <section className={`${styles.section} ${styles.carsSection}`}>
          <Text as="h2" variant="subtitle">🚗 Dernières Voitures</Text>
          <CarsindexList />
        </section>

        {/* Section Articles */}
        <section className={`${styles.section} ${styles.articlesSection}`}>
          <BlogLayout>
            <Text as="h2" variant="subtitle">📰 Derniers Articles</Text>
            <ArticlesindexList />
          </BlogLayout>
        </section>

        {/* Section Inscription */}
        <section className={`${styles.section} ${styles.registerSection}`}>
          <SubCarLayout>
            <Text as="h2" variant="subtitle">📢 Inscrivez votre voiture</Text>
            {/* Ajoute ici le formulaire d'inscription */}
          </SubCarLayout>
        </section>
      </div>
    </MainLayout>
  );
}
