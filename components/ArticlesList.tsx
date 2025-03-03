"use client";
import styles from "../styles/articlesList.module.css";
import { Article } from "../hooks/typeArticle";
import Button from "./Button";
import Text from "@/components/Text";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <div className={styles.articleContainer}>
      {articles.length === 0 ? (
        <p className={styles.noResults}>Aucun article trouvé.</p>
      ) : (
        articles.map((article) => (
          <div key={article._id} className={styles.articleCard}>
            <img className={styles.articleImage} src={article.mainImage} alt={article.title} />
            <Text as="h2" variant="subtitle2" className={styles.articleTitle}>{article.title}</Text>
            <div className={styles.articleFooter}>
            <Text as="p" variant="muted" className={styles.articleDate}>
              {new Date(article.publishedAt).toLocaleDateString()}
            </Text>
            <Button variant="noBorder" href={`/article/${article._id}`}>Lire plus</Button>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ArticlesList;
