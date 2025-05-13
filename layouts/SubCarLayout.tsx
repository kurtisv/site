import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

interface principaleLayoutProps {
  children: ReactNode;
}

const principaleLayout = ({ children }: principaleLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default principaleLayout;