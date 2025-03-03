"use client";
import { useEffect, useState } from "react";
import { getLatestPosts } from "../hooks/foncBlog";
import styles from "../styles/articlesindexList.module.css"; // Import du module CSS
import Button from "./Button";
import Text from "@/components/Text";

type Article = {
  _id: string;
  title: string;
  img: string;
  publishedAt: string;
};

const ArticlesindexList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getLatestPosts();
      setArticles(data);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  if (isLoading) {
    return <div className={styles.loader}></div>;
  }

  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <div key={article._id} className={styles.articleCard}>
          <img className={styles.articleImage} src={article.img} alt={article.title} />
          <Text as="h2" variant="subtitle2" className={styles.articleTitle}>{article.title}</Text>
          <div className={styles.articleFooter}>
            <Text as="p" variant="muted" >
              {new Date(article.publishedAt).toLocaleDateString()}
            </Text>
            <Button variant="noBorder" href={`/article/${article._id}`}>Lire plus</Button>
          </div>
        </div>
      ))}
      <Button variant="slanted" href="/articles">Voir tous les articles</Button>
    </div>
  );
};

export default ArticlesindexList;
