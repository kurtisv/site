import { createClient } from "next-sanity";
import groq from "groq";

// Création du client Sanity pour interagir avec la base de données
const client = createClient({
  projectId: "emi9ttls", // Remplace par ton vrai project ID
  dataset: "production",
  apiVersion: "2025-02-11",
  useCdn: false, // Désactive le CDN pour récupérer les données les plus récentes
});

/**
 * 📌 Récupère **toutes les voitures** en base, triées par date de création (les plus récentes en premier).
 */
export async function getCars() {
  return client.fetch(groq`
    *[_type == "car"] | order(_createdAt desc){
    _id,
    name,
    brand,
    model,
    year,
    price,
    fuelType,
    horsepower,
    torque,
    "imageUrl": image.asset->url,
    description,
    alt,
    gallery[] {
      category,
      image,
      description
    },
    auteur
  }
  `);
}

/**
 * 📌 Récupère les **3 dernières voitures ajoutées**.
 */
export async function getLatestCars() {
  return client.fetch(groq`
    *[_type == "car"] | order(_createdAt desc) [0...3] {
      _id, // ✅ Clé unique pour React
      name,
      brand,
      model,
      fuelType,
      year,
      horsepower,
      torque,
      description,
      "imageUrl": image.asset->url

    }
  `);
}

/**
 * 📌 Récupère les voitures postées par **un auteur spécifique**.
 * @param {string} auteur - Nom de l'auteur dont on veut voir les voitures
 */
export async function getCarsByAuteur(auteur: string) {
  return client.fetch(groq`
    *[_type == "car" && auteur == $auteur] | order(_createdAt desc)
  `, { auteur });
}

/**
 * 📌 Récupère toutes les voitures d'une **marque spécifique**.
 * @param {string} brand - Nom de la marque (ex: "Tesla", "BMW")
 */
export async function getCarsByBrand(brand: string) {
  return client.fetch(groq`
    *[_type == "car" && brand == $brand] | order(_createdAt desc)
  `, { brand });
}

/**
 * 📌 Récupère **tous les modèles d'une marque** (avec doublons).
 * @param {string} brand - Nom de la marque
 */
export async function getModelsByBrand(brand: string) {
  return client.fetch(groq`
    *[_type == "car" && brand == $brand] {model}
  `, { brand });
}

/**
 * 📌 Récupère toutes les voitures **d'un modèle spécifique**.
 * @param {string} model - Nom du modèle (ex: "Model S", "Golf")
 */
export async function getCarsByModel(model: string) {
  return client.fetch(groq`
    *[_type == "car" && model == $model] | order(_createdAt desc)
  `, { model });
}

/**
 * 📌 Récupère toutes les voitures d'une **année spécifique**.
 * @param {number} year - Année de fabrication (ex: 2022)
 */
export async function getCarsByYear(year: number) {
  return client.fetch(groq`
    *[_type == "car" && year == $year] | order(_createdAt desc)
  `, { year });
}

/**
 * 📌 Récupère toutes les voitures ayant un **prix spécifique**.
 * @param {number} price - Prix exact de la voiture
 */
export async function getCarsByPrice(price: number) {
  return client.fetch(groq`
    *[_type == "car" && price == $price] | order(_createdAt desc)
  `, { price });
}

/**
 * 📌 Récupère toutes les voitures selon leur **type de carburant**.
 * @param {string} fuelType - Type de carburant (Petrol, Diesel, Electric, Hybrid)
 */
export async function getCarsByFuelType(fuelType: string) {
  return client.fetch(groq`
    *[_type == "car" && fuelType == $fuelType] | order(_createdAt desc)
  `, { fuelType });
}

/**
 * 📌 Récupère toutes les voitures ayant **une puissance spécifique (en chevaux)**.
 * @param {number} horsepower - Puissance moteur (ex: 150, 300)
 */
export async function getCarsByHorsepower(horsepower: number) {
  return client.fetch(groq`
    *[_type == "car" && horsepower == $horsepower] | order(_createdAt desc)
  `, { horsepower });
}

/**
 * 📌 Récupère toutes les voitures ayant **un couple moteur spécifique (Nm)**.
 * @param {number} torque - Couple moteur en Newton-mètre
 */
export async function getCarsByTorque(torque: number) {
  return client.fetch(groq`
    *[_type == "car" && torque == $torque] | order(_createdAt desc)
  `, { torque });
}

/**
 * 📌 Récupère les informations d'une voiture spécifique.
 * @param {string} id - ID unique de la voiture
 */
export async function getCarById(id: string) {
  return client.fetch(groq`
    *[_type == "car" && _id == $id][0] {
      name,
      brand,
      model,
      year,
      price,
      fuelType,
      horsepower,
      torque,
      "image": image.asset->url,
      description,
      "gallery": gallery[]{
        category,
        "url": image.asset->url, 
        description
      },
      auteur
    }
  `, { id });
  
}

