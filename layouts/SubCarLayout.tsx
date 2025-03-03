import { ReactNode } from "react";

interface SubCarLayoutProps {
  children: ReactNode;
}

const SubCarLayout = ({ children }: SubCarLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default SubCarLayout;