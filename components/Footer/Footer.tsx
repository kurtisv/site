import Link from "next/link";
import styles from "./footer.module.css";
import Text from "../Text";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Description du site */}
        <div className={styles.description}>
        <Text as="h2" variant="subtitle2">AutoVibe</Text>
          <Text as="p" variant="muted">
            Découvrez notre plateforme pour explorer, apprendre et interagir avec le monde automobile.
          </Text>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <Text as="h3" variant="subtitle2">Lien rapide</Text>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <hr/>
      <div className={styles.copy}>
        <Text as="p" variant="muted" >&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</Text>
      </div>
    </footer>
  );
};

export default Footer;
