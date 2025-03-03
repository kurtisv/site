import { createClient } from "next-sanity";
import groq from "groq";

// Création du client Sanity pour interagir avec la base de données
const client = createClient({
    projectId: "emi9ttls", // Remplace par ton vrai project ID
    dataset: "production",
    apiVersion: "2025-02-11",
    useCdn: false, // Désactive le CDN pour récupérer les données les plus récentes
  });

/**
 * 📌 Récupère **tous les articles** triés du plus récent au plus ancien.
 */
export async function getPosts() {
    return client.fetch(groq`
        *[_type == "post"] | order(publishedAt desc){
            _id,
            title,
            publishedAt,
            "author": author->name,
            "mainImage": mainImage.asset->url,
            slug}
    `);
}

/**
 * 📌 Récupère les **3 derniers articles** ajoutés.
 */
export async function getLatestPosts() {
    return client.fetch(groq`
        *[_type == "post"] | order(publishedAt desc) [0...3]{
            _id, // ✅ Clé unique pour React
            title,
            publishedAt,
            "img": mainImage.asset->url}
    `);
}

/**
 * 📌 Récupère les articles postés par **un auteur spécifique**.
 * @param {string} author - Nom de l'auteur dont on veut voir les articles
 */
export async function getPostsByAuthor(author: string) {
    return client.fetch(groq`
        *[_type == "post" && author == $author] | order(publishedAt desc)
    `, { author });
}

/**
 * 📌 Récupère un article spécifique par son ID.
 * @param {string} id - ID unique de l'article
 */
export async function getPostById(id: string) {
    return client.fetch(groq`
        *[_type == "post" && _id == $id] | order(publishedAt desc) [0]{
            _id,
            title,
            publishedAt,
            "author": author->name,
            "mainImage": mainImage.asset->url,
            "slug": slug.current,
            body}
    `, { id });
}