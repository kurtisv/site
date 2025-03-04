import MainLayout from "../../layouts/MainLayout";
import Text from "@/components/Text";
import Button from "@/components/Button";
import styles from "@/styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Text as="h1" variant="title" className={styles.heroTitle}>
            Notre Passion Pour L'Automobile
          </Text>
          <Text as="p" variant="default" className={styles.heroDescription}>
            Découvrez l'équipe et la vision derrière AutoVibe, votre destination ultime pour tout ce qui concerne l'automobile.
          </Text>
          <div className={styles.heroCta}>
            <Button variant="primary">Rejoindre la communauté</Button>
            <Button variant="outline">Voir nos voitures</Button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            {/* Placeholder for hero image */}
            <div className={styles.imagePlaceholder}>
              <span>🏎️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyContent}>
            <Text as="h2" variant="subtitle" className={styles.sectionTitle}>
              Notre Histoire
            </Text>
            <Text as="p" variant="default" className={styles.storyText}>
              Fondée en 2023 par une équipe de passionnés d'automobile, AutoVibe est née d'une vision simple : créer un espace où les amateurs de voitures peuvent découvrir, apprendre et partager leur passion commune.
            </Text>
            <Text as="p" variant="default" className={styles.storyText}>
              Ce qui a commencé comme un petit blog s'est transformé en une plateforme complète offrant des fiches détaillées sur divers modèles, des articles d'actualité et un espace communautaire vibrant.
            </Text>
            <Text as="p" variant="default" className={styles.storyText}>
              Aujourd'hui, nous sommes fiers de servir des milliers de passionnés à travers le monde, en leur offrant un contenu de qualité et une expérience utilisateur exceptionnelle.
            </Text>
          </div>
          <div className={styles.storyStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Utilisateurs</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Voitures</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={styles.valuesSection}>
        <Text as="h2" variant="subtitle" className={styles.sectionTitle}>
          Nos Valeurs
        </Text>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔍</div>
            <Text as="h3" variant="subtitle2" className={styles.valueTitle}>
              Précision
            </Text>
            <Text as="p" variant="default" className={styles.valueDescription}>
              Nous nous engageons à fournir des informations précises et vérifiées sur chaque véhicule et sujet que nous couvrons.
            </Text>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <Text as="h3" variant="subtitle2" className={styles.valueTitle}>
              Communauté
            </Text>
            <Text as="p" variant="default" className={styles.valueDescription}>
              Nous créons un environnement inclusif où tous les passionnés peuvent partager et apprendre ensemble.
            </Text>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <Text as="h3" variant="subtitle2" className={styles.valueTitle}>
              Innovation
            </Text>
            <Text as="p" variant="default" className={styles.valueDescription}>
              Nous restons à la pointe des tendances automobiles et technologiques pour vous offrir le meilleur contenu.
            </Text>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌱</div>
            <Text as="h3" variant="subtitle2" className={styles.valueTitle}>
              Durabilité
            </Text>
            <Text as="p" variant="default" className={styles.valueDescription}>
              Nous promouvons une approche responsable de l'automobile, en mettant en avant les innovations écologiques.
            </Text>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <Text as="h2" variant="subtitle" className={styles.sectionTitle}>
          Notre Équipe
        </Text>
        <Text as="p" variant="default" className={styles.teamDescription}>
          Rencontrez les passionnés qui font vivre AutoVibe au quotidien.
        </Text>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <span>👨‍💼</span>
              </div>
            </div>
            <Text as="h3" variant="subtitle2" className={styles.memberName}>
              Thomas Dubois
            </Text>
            <Text as="p" variant="muted" className={styles.memberRole}>
              Fondateur & CEO
            </Text>
            <Text as="p" variant="default" className={styles.memberBio}>
              Passionné de voitures depuis son enfance, Thomas a créé AutoVibe pour partager sa passion avec le monde.
            </Text>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <span>👩‍💼</span>
              </div>
            </div>
            <Text as="h3" variant="subtitle2" className={styles.memberName}>
              Sophie Martin
            </Text>
            <Text as="p" variant="muted" className={styles.memberRole}>
              Rédactrice en Chef
            </Text>
            <Text as="p" variant="default" className={styles.memberBio}>
              Avec 10 ans d'expérience dans le journalisme automobile, Sophie dirige notre équipe éditoriale avec expertise.
            </Text>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <span>👨‍💻</span>
              </div>
            </div>
            <Text as="h3" variant="subtitle2" className={styles.memberName}>
              Marc Leroy
            </Text>
            <Text as="p" variant="muted" className={styles.memberRole}>
              Développeur
            </Text>
            <Text as="p" variant="default" className={styles.memberBio}>
              Marc combine sa passion pour les voitures et la technologie pour créer une expérience utilisateur exceptionnelle.
            </Text>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <div className={styles.imagePlaceholder}>
                <span>👩‍🎨</span>
              </div>
            </div>
            <Text as="h3" variant="subtitle2" className={styles.memberName}>
              Lucie Bernard
            </Text>
            <Text as="p" variant="muted" className={styles.memberRole}>
              Designer UX/UI
            </Text>
            <Text as="p" variant="default" className={styles.memberBio}>
              Lucie crée des interfaces élégantes et intuitives qui rendent l'exploration de notre site agréable.
            </Text>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={styles.joinSection}>
        <div className={styles.joinContainer}>
          <Text as="h2" variant="subtitle" className={styles.joinTitle}>
            Rejoignez Notre Communauté
          </Text>
          <Text as="p" variant="default" className={styles.joinDescription}>
            Partagez votre passion pour l'automobile avec des milliers d'autres passionnés. Inscrivez-vous aujourd'hui pour accéder à du contenu exclusif et participer à notre communauté vibrante.
          </Text>
          <div className={styles.joinCta}>
            <Button variant="primary">S'inscrire maintenant</Button>
            <Button variant="outline">En savoir plus</Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
