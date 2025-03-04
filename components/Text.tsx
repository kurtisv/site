import styles from "../styles/text.module.css";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"; // 🔥 Gérer plusieurs éléments HTML
  variant?: "default" | "title" | "title2" | "title3" | "subtitle" | "subtitle2" | "highlight" | "muted"; // 🎨 Plusieurs styles possibles
  className?: string; // Permet d'ajouter des classes supplémentaires
}

const Text = ({ children, as: Tag = "p", variant = "default", className = "" }: TextProps) => {
  const classNames = `${styles.text} ${styles[variant]} ${className}`;

  return <Tag className={classNames}>{children}</Tag>;
};

export default Text;
