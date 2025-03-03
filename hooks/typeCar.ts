export type Car = {
  image: any;
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  horsepower: number;
  torque: number;
  imageUrl: string; 
  description: string;
  alt: string;
  gallery: {
    category: "interior_front" | "interior_back" | "exterior";
    url: string; 
    description: string;
  }[];
  auteur: string;
};
