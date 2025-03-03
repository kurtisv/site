import MainLayout from "@/layouts/MainLayout";
import { getPostById } from "@/hooks/foncBlog";
import { Article } from "@/hooks/typeArticle";
import ArticlePoster from "../../../components/Articlesposter";

export default async function ArticlePage({ params }: { params: { id: string } }) {
    const article: Article | null = await getPostById(params.id);
    if (!article) return <p>🚨 Article non trouvé.</p>;
    console.log("📰 Article trouvé :", article);
    
    return (
        <MainLayout>
            <ArticlePoster article={article} />
        </MainLayout>
    );
}