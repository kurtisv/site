import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/globals.module.css";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentMain}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
