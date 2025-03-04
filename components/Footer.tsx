import Link from "next/link";
import styles from "../styles/footer.module.css";
import Text from "../components/Text";
import Button from "../components/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <Text as="h2" variant="subtitle2">AutoVibe</Text>
            <Text as="p" variant="muted" className={styles.companyDesc}>
              Votre destination ultime pour explorer, apprendre et interagir avec le monde automobile. Nous offrons une expérience complète pour tous les passionnés.
            </Text>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className={styles.socialIcon}>📘</i></a>
              <a href="#" aria-label="Twitter"><i className={styles.socialIcon}>📱</i></a>
              <a href="#" aria-label="Instagram"><i className={styles.socialIcon}>📷</i></a>
              <a href="#" aria-label="YouTube"><i className={styles.socialIcon}>🎬</i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <Text as="h3" variant="subtitle2">Liens Rapides</Text>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/cars">Voitures</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className={styles.footerColumn}>
            <Text as="h3" variant="subtitle2">Ressources</Text>
            <ul className={styles.footerLinks}>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Politique de confidentialité</Link></li>
              <li><Link href="/terms">Conditions d'utilisation</Link></li>
              <li><Link href="/sitemap">Plan du site</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className={styles.footerColumn}>
            <Text as="h3" variant="subtitle2">Restez Informé</Text>
            <Text as="p" variant="muted">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et offres spéciales.
            </Text>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Votre email" className={styles.newsletterInput} />
              <Button variant="primary" className={styles.newsletterButton}>S'inscrire</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <Text as="p" variant="muted" className={styles.copyright}>
          &copy; {currentYear} AutoVibe. Tous droits réservés.
        </Text>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">Confidentialité</Link>
          <Link href="/terms">Conditions</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
