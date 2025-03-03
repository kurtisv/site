import styles from "../styles/button.module.css";
import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

// 📌 Interface pour définir les props du bouton
interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "outline" | "danger" | "success" | "noBorder"| "slanted"; // 🔥 Ajout de plusieurs styles
  fullWidth?: boolean; // Option pour bouton large
}

const Button = ({ children, href, type = "button", onClick, variant = "primary", fullWidth = false }: ButtonProps) => {
  const isInternalLink = href && href.startsWith("/");
  const className = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""}`; // 📌 Combine les classes CSS dynamiquement

  if (href) {
    return isInternalLink ? (
      <Link href={href} className={className}>
        {children}
      </Link>
    ) : (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
