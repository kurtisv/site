"use client";

import { useState } from "react";
import styles from "../styles/gallery.module.css";
import Text from "./Text";
import { Car } from "../hooks/typeCar";
import {
  Calendar,
  Horse,
  GasPump,
  CurrencyDollar,
  User,
  Gear,
} from "phosphor-react";

interface GalleryProps {
  thecar: Car;
}

const Gallery: React.FC<GalleryProps> = ({ thecar }) => {
  const fullGallery = [
    { url: thecar.image, description: thecar.description },
    ...thecar.gallery,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (index: number) => {
    if (index !== currentImage) {
      setIsTransitioning(true); // Active l’animation de sortie
      setTimeout(() => {
        setCurrentImage(index);
        setIsTransitioning(false); // Réactive la nouvelle image après le délai
      }, 400); // Augmenté pour synchroniser avec le CSS
    }
  };
  

  if (!fullGallery || fullGallery.length === 0) {
    return <p className={styles.noImages}>Aucune image disponible.</p>;
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.sectiongallery}>
          {/* 📸 Grande image affichée avec animation dynamique */}
          <div className={styles.galleryImageContainer}>
            <img
              src={fullGallery[currentImage].url}
              alt={fullGallery[currentImage].description || "Image de voiture"}
              className={`${styles.galleryImage} ${isTransitioning ? styles.fadeOut : ""}`}
            />
          </div>

          {/* 🖼️ Liste des miniatures */}
          <div className={styles.galleryThumbnails}>
            {fullGallery.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.description || `Thumbnail ${index}`}
                className={`${styles.thumbnail} ${
                  currentImage === index ? styles.active : ""
                }`}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        </div>

        {/* 📝 Description de l'image */}
        <div className={styles.sectiondescription}>
          <Text as="h2" variant="subtitle2" className={styles.imageTitle}>
            {thecar.brand} {thecar.model}
          </Text>
          <div className={styles.descripseparator}>
            <Text
              as="p"
              variant="muted"
              className={styles.imageDescriptiontext}
            >
              {fullGallery[currentImage].description ||
                "Aucune description disponible."}
            </Text>
          </div>
          <Text as="h3" variant="default" className={styles.imageTitle}>
            Détails
          </Text>
          <div className={styles.detailsseparator}>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              <Calendar size={20} weight="duotone" /> {thecar.year}
            </Text>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              <Horse size={20} weight="duotone" /> {thecar.horsepower} HP
            </Text>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              <Gear size={20} weight="duotone" /> {thecar.torque} Nm
            </Text>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              <GasPump size={20} weight="duotone" /> {thecar.fuelType}
            </Text>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              {thecar.price} <CurrencyDollar size={15} weight="duotone" />
            </Text>
            <Text as="span" variant="muted" className={styles.imageDescription}>
              <User size={20} weight="duotone" /> {thecar.auteur || "Inconnu"}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
