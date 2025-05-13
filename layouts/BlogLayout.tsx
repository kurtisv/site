"use client";
import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;