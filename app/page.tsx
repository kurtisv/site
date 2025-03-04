import MainLayout from "../layouts/MainLayout";
import ArticlesindexList from "../components/ArticlesindexList";
import CarsindexList from "../components/CarsindexList";
import styles from "../styles/globals.module.css";
import Text from "@/components/Text"; 
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Text as="h1" variant="title" className={styles.fadeIn}>
            AutoVibe
          </Text>
          <Text as="h2" variant="title2" className={styles.fadeIn}>
            Votre destination ultime pour l'univers automobile
          </Text>
          <Text as="p" className={styles.heroParagraph}>
            Plongez dans notre univers et explorez les dernières voitures et articles qui font vibrer la route.
          </Text>
          <div className={styles.heroCta}>
            <Button variant="primary" href="/cars">Découvrir les voitures</Button>
            <Button variant="secondary" href="/articles">Lire nos articles</Button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            {/* Placeholder for hero image */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <Text as="h2" variant="title2">Pourquoi choisir AutoVibe?</Text>
          <Text as="p" className={styles.sectionSubtitle}>
            Nous offrons une expérience complète pour tous les passionnés d'automobile
          </Text>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚗</div>
            <Text as="h3" variant="title3">Catalogue Complet</Text>
            <Text as="p">Explorez notre vaste collection de voitures avec des détails techniques précis</Text>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📰</div>
            <Text as="h3" variant="title3">Articles Experts</Text>
            <Text as="p">Lisez des articles rédigés par des passionnés et experts du domaine automobile</Text>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <Text as="h3" variant="title3">Recherche Avancée</Text>
            <Text as="p">Trouvez facilement le véhicule de vos rêves grâce à nos filtres de recherche</Text>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌟</div>
            <Text as="h3" variant="title3">Communauté Active</Text>
            <Text as="p">Rejoignez une communauté de passionnés et partagez votre amour pour l'automobile</Text>
          </div>
        </div>
      </section>

      {/* Latest Cars Carousel Section */}
      <section className={styles.latestCarsSection}>
        <div className={styles.sectionHeader}>
          <Text as="h2" variant="title2">Dernières Voitures</Text>
          <Text as="p" className={styles.sectionSubtitle}>
            Découvrez les derniers modèles ajoutés à notre catalogue
          </Text>
        </div>
        <CarsindexList />
        <div className={styles.sectionCta}>
          <Button variant="slanted" href="/cars">Voir toutes les voitures</Button>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className={styles.latestArticlesSection}>
        <div className={styles.sectionHeader}>
          <Text as="h2" variant="title2">Derniers Articles</Text>
          <Text as="p" className={styles.sectionSubtitle}>
            Restez informé avec nos derniers articles sur l'univers automobile
          </Text>
        </div>
        <ArticlesindexList />
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <Text as="h2" variant="title2">Ce que disent nos utilisateurs</Text>
          <Text as="p" className={styles.sectionSubtitle}>
            Découvrez les témoignages de notre communauté
          </Text>
        </div>
        
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <Text as="p" className={styles.testimonialText}>
                "AutoVibe m'a permis de trouver la voiture de mes rêves grâce à ses descriptions détaillées et ses photos de qualité."
              </Text>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}></div>
                <div>
                  <Text as="h4" variant="title3">Jean Dupont</Text>
                  <Text as="p" variant="muted">Passionné d'automobile</Text>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <Text as="p" className={styles.testimonialText}>
                "Les articles sont vraiment bien rédigés et m'apportent toujours des informations pertinentes sur les dernières tendances."
              </Text>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}></div>
                <div>
                  <Text as="h4" variant="title3">Marie Martin</Text>
                  <Text as="p" variant="muted">Journaliste automobile</Text>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <Text as="p" className={styles.testimonialText}>
                "La communauté est incroyable, j'ai pu échanger avec d'autres passionnés et partager ma passion pour les voitures."
              </Text>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}></div>
                <div>
                  <Text as="h4" variant="title3">Pierre Leroy</Text>
                  <Text as="p" variant="muted">Collectionneur</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <Text as="h2" variant="title2">Prêt à rejoindre l'aventure?</Text>
          <Text as="p" className={styles.ctaText}>
            Inscrivez votre voiture dès aujourd'hui et rejoignez notre communauté de passionnés
          </Text>
          <Button variant="primary" href="/register">Inscrire ma voiture</Button>
        </div>
      </section>
    </MainLayout>
  );
}
