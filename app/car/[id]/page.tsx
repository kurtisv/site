import { getCarById } from "../../../hooks/foncCars"; // Fonction pour récupérer une voiture
import MainLayout from "../../../layouts/MainLayout";
import Gallery from "../../../components/Gallery";
import styles from "../../../styles/carPage.module.css";
import { Car } from "@/hooks/typeCar";


export default async function CarPage({ params }: { params: { id: string } }) {
  const car: Car | null = await getCarById(params.id);// 🔥 Récupère directement la voiture
  if (!car) return <p className={styles.notFound}>🚨 Voiture non trouvée.</p>;
  console.log("🚗 Voiture trouvée :", car);
  

  return (
    <MainLayout>
          <Gallery thecar={car} />
    </MainLayout>
  );
}
