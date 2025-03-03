"use client";
import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import NavbarCar from "@/components/NavbarCar";
import CarList from "@/components/CarsList";
import { getCars } from "../../hooks/foncCars";
import { Car } from "../../hooks/typeCar";

export default function CatalogCarPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("toutes les marques");

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      setCars(data);
      setFilteredCars(data);
    };
    fetchCars();
  }, []);

  // 🔍 Extraire toutes les marques uniques
  const brands = ["toutes les marques", ...new Set(cars.map((car) => car.brand))];

  // 🔍 Filtrage des voitures à chaque changement de search ou brand
  useEffect(() => {
    let filtered = cars;

    if (search) {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (brand !== "toutes les marques") {
      filtered = filtered.filter((car) => car.brand === brand);
    }

    setFilteredCars(filtered);
  }, [search, brand, cars]);

  return (
    <MainLayout>
      <NavbarCar setSearch={setSearch} setBrand={setBrand} brands={brands} />
      <CarList cars={filteredCars} />
    </MainLayout>
  );
}
