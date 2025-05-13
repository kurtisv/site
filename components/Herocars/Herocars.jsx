"use client";
import Text from "@/components/Text";
import styles from "./heroCars.module.css"; // ⬅️ nouveau module
import CarsindexList from "@/components/Carsindex/CarsindexList"; // ⬅️ nouveau module

export default function HeroCars() {
    return (
        <section className={`${styles.section} ${styles.carsSection}`}>
                  <Text as="h2" variant="subtitle">🚗 Dernières Voitures</Text>
                  <CarsindexList />
                </section>
    )
}
