"use client";
import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import NavbarArticle from "../../components/NavbarArticle";
import ArticlesList from "@/components/ArticlesList";
import { getPosts } from "../../hooks/foncBlog";
import { Article } from "../../hooks/typeArticle";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getPosts();
      setArticles(data);
      setFilteredArticles(data);
    };
    fetchArticles();
  }, []);

  // 🔍 Filtrage des articles par recherche
  useEffect(() => {
    let filtered = articles;

    if (search) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [search, articles]);

  return (
    <MainLayout>
      <NavbarArticle setSearch={setSearch} />
      <ArticlesList articles={filteredArticles} />
    </MainLayout>
  );
}
