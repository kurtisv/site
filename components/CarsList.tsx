"use client";
import styles from "../styles/CarList.module.css";
import { Car } from "../hooks/typeCar";
import Button from "./Button";
import Text from "@/components/Text";

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div className={styles.carContainer}>
      {cars.length === 0 ? (
        <Text as="p" variant="muted" className={styles.noResults}>Aucune voiture trouvée.</Text>
      ) : (
        cars.map((car) => (
          <div key={car._id} className={styles.carCard}>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={car.imageUrl} alt={car.name} />
            </div>
            <Text as="h2" variant="subtitle2" className={styles.carTitle}>{car.brand} {car.model} </Text>
            <Text as="p" variant="muted" className={styles.carPrice}>💰 {car.price} $</Text>
            <Text as="p" variant="muted" className={styles.carFuel}>⛽ {car.fuelType} | ⚡ {car.horsepower} HP</Text>
            <Text as="p" variant="muted" className={styles.carAuthor}>Posté par : {car.auteur}</Text>
            <Button variant="primary" href={`/car/${car._id}`}>
              Voir details
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default CarList;
