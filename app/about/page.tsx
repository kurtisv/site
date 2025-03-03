import MainLayout from "../../layouts/MainLayout";
import Text from "@/components/Text";
import styles from "@/styles/about.module.css"; // Nouveau fichier CSS dédié à About

export default function About() {
  return (
    <MainLayout>
      <div className={styles.aboutContainer}>
        <Text as="h1" variant="title">À propos de nous</Text>
        <Text as="p" variant="default" className={styles.description}>
          Bienvenue sur notre site dédié aux passionnés d’automobile ! Ici, vous pouvez 
          explorer des fiches détaillées sur divers modèles de voitures, lire des articles 
          d’actualité et même partager votre propre véhicule avec la communauté.
        </Text>

        <Text as="h2" variant="subtitle" className={styles.sectionTitle}>Notre mission</Text>
        <Text as="p" variant="default">
          Nous avons créé cette plateforme pour offrir un espace où les amateurs de voitures 
          peuvent découvrir des véhicules sous tous les angles, consulter leurs caractéristiques, 
          et rester informés des dernières tendances du monde automobile.
        </Text>

        <Text as="h2" variant="subtitle" className={styles.sectionTitle}>Ce que vous trouverez ici</Text>
        <ul className={styles.list}>
          <li>📌 Un catalogue de voitures avec des fiches détaillées et des images haute qualité.</li>
          <li>📰 Un blog avec des actualités et des analyses sur les nouvelles sorties automobiles.</li>
          <li>🚗 Un espace pour soumettre et afficher votre propre véhicule.</li>
        </ul>

        <Text as="h2" variant="subtitle" className={styles.sectionTitle}>Rejoignez la communauté</Text>
        <Text as="p" variant="default">
          N’hésitez pas à explorer le site et à contribuer en partageant votre passion avec nous. 
          Que vous soyez un amateur ou un expert, il y a toujours quelque chose de nouveau à découvrir ici !
        </Text>
      </div>
    </MainLayout>
  );
}
