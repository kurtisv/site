 // HeroArticle.jsx – version full-client
"use client";
import dynamic from "next/dynamic";
import Text from "@/components/Text";
import styles from "./heroArticle.module.css";
import ArticlesindexList from "@/components/Articleindex/ArticlesindexList";

const BlogLayout = dynamic(() => import("@/layouts/BlogLayout"), { ssr: false });

 export default function HeroArticle() {
   return (
     <section className={`${styles.section} ${styles.articlesSection}`}>
       <BlogLayout>
         <Text as="h2" variant="subtitle">📰 Derniers Articles</Text>
         <ArticlesindexList />
       </BlogLayout>
     </section>
   );
 }
