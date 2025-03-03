import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/contact.module.css";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contactez-nous</h1>
        <p className={styles.subtitle}>
          Une question ? Un projet ? Nous sommes à votre écoute !
        </p>

        <div className={styles.contactContent}>
          {/* Coordonnées */}
          <div className={styles.contactInfo}>
            <h2>Nos coordonnées</h2>
            <p><strong>Email :</strong> contact@autovibe.com</p>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
            <p><strong>Adresse :</strong> 123 Avenue du Style, 75000 Paris</p>
          </div>

          {/* Formulaire de contact */}
          <div className={styles.contactForm}>
            <h2>Envoyez-nous un message</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" placeholder="Votre nom" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Votre email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Votre message..." required></textarea>
              </div>

              <button type="submit" className={styles.button}>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
