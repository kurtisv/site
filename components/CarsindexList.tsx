"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { getLatestCars } from "../hooks/foncCars";
import styles from "../styles/carindexList.module.css";
import Text from "@/components/Text";

type Car = {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  horsepower: number;
  torque: number;
  fuelType: string;
  imageUrl: string;
};

const CarsindexList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getLatestCars();
      console.log("🚗 Données reçues :", data);
      setCars(data);
      setIsLoading(false);
    };
    fetchCars();
  }, []);

  if (isLoading) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div className={styles.container}>
      {cars.map((car) => (
        <div key={car._id} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={car.imageUrl} alt={car.name} />
          </div>
          <div className={styles.content}>
            <Text as="h2" variant="subtitle2">{car.brand} {car.model}</Text>
            <span className={styles.year}>{car.year}</span>
            <div className={styles.details}>
              <span>⛽ {car.fuelType}</span>
              <span>⚡ {car.horsepower} HP</span>
              <span>🔧 {car.torque} Nm</span>
            </div>
            <Button variant="primary" href={`/car/${car._id}`}>
            Voir details
            </Button>
          </div>
        </div>
      ))}
      <Button variant="slanted" href="/cars">Voir tous les voitures</Button>
    </div>
  );
};

export default CarsindexList;
