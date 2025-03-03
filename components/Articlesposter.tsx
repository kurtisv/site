"use client";

import { Calendar, User } from "phosphor-react";
import styles from "../styles/articleposter.module.css";
import { Article } from "../hooks/typeArticle";
import Text from "./Text";
import { PortableText } from "@portabletext/react";

interface ArticlePosterProps {
  article: Article;
}

const ArticlePoster: React.FC<ArticlePosterProps> = ({ article }) => {
  return (
    <div className={styles.articlePoster}>
      <div className={styles.articlePosterContent}>
        {/* 📌 Titre de l'article */}
        <Text as="h1" className={styles.articleTitle}>{article.title}</Text>

        {/* 📅 Date de publication */}
        <Text as="p" className={styles.articleDate}>
          <Calendar size={20} /> {new Date(article.publishedAt).toLocaleDateString()}
        </Text>

        {/* 🖼️ Image principale */}
        {article.mainImage && (
          <img className={styles.articleImage} src={article.mainImage} alt={article.title} />
        )}

        {/* 📜 Contenu de l'article avec `PortableText` */}
        <div className={styles.articleBody}>
          <PortableText
            value={article.body}
            components={{
              block: {
                h1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
                h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
                h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
                normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
              },
              marks: {
                strong: ({ children }) => <strong>{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
              },
              list: {
                bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
                number: ({ children }) => <ol className={styles.list}>{children}</ol>,
              },
              listItem: {
                bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
                number: ({ children }) => <li className={styles.listItem}>{children}</li>,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePoster;
