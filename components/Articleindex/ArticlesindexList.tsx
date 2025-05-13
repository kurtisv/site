"use client";
import { useEffect, useState } from "react";
import { getLatestPosts } from "../../hooks/foncBlog";
import styles from "../Articleindex/articlesindexList.module.css";
import Button from "../Button";
import Text from "@/components/Text";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Article = {
  _id: string;
  title: string;
  img: string;
  publishedAt: string;
};

const ArticlesindexList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn); // 👈 classe d'animation

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getLatestPosts();
      setArticles(data);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  // Auto changement avec animation
  useEffect(() => {
    if (articles.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [articles]);

  const handlePrevious = () => {
    setFadeClass(styles.fadeOut);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? articles.length - 1 : prevIndex - 1
      );
      setFadeClass(styles.fadeIn);
    }, 300);
  };

  const handleNext = () => {
    setFadeClass(styles.fadeOut);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      setFadeClass(styles.fadeIn);
    }, 300);
  };

  if (isLoading) {
    return <div className={styles.loader}></div>;
  }

  const currentArticle = articles[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={handlePrevious} aria-label="Précédent">
          <ChevronLeft size={36} />
        </button>

        <div key={currentArticle._id} className={`${styles.articleCard} ${fadeClass}`}>
          <img className={styles.articleImage} src={currentArticle.img} alt={currentArticle.title} />
          <Text as="h2" variant="subtitle2" className={styles.articleTitle}>
            {currentArticle.title}
          </Text>
          <div className={styles.articleFooter}>
            <Text as="p" variant="muted">
              {new Date(currentArticle.publishedAt).toLocaleDateString()}
            </Text>
            <Button variant="noBorder" href={`/article/${currentArticle._id}`}>
              Lire plus
            </Button>
          </div>
        </div>

        <button className={styles.arrow} onClick={handleNext} aria-label="Suivant">
          <ChevronRight size={36} />
        </button>
      </div>

      <Button variant="slanted" href="/articles" >
        Voir tous les articles
      </Button>
    </div>
  );
};

export default ArticlesindexList;
