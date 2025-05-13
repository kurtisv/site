"use client";
import styles from "./heroInscription.module.css";   // ⬅️ nouveau module
import Text from "@/components/Text";
import { useState, useEffect } from "react";
import SubCarLayout from "@/layouts/SubCarLayout";

export default function HeroInscription() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev < 4 ? prev + 1 : 0));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* TIMELINE DES ÉTAPES ------------------------------------------------ */}
      <section className={styles.stepsSection}>
        <Text as="h2" variant="subtitle">
          📋 Étapes pour inscrire votre voiture
        </Text>

        <div className={styles.stepTimeline}>
          {["Créer un compte",
            "Accéder au formulaire",
            "Ajouter infos et photos",
            "Soumettre"].map((step, index) => (
            <div
              key={index}
              className={`${styles.stepItem} ${index < activeStep ? styles.activeStepItem : ""}`}
            >
              <div
                className={`${styles.stepCircle} ${index < activeStep ? styles.active : ""}`}
              >
                {index + 1}
              </div>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION FORMULAIRE ------------------------------------------------- */}
      <section className={`${styles.section} ${styles.registerSection}`}>
        <div>
          <Text as="h2" variant="subtitle">
            📢 Inscrivez votre voiture
          </Text>
          {/* Formulaire à ajouter ici */}
        </div>
      </section>
    </div>
  );
}
