import { TypedObject } from "@portabletext/types";

export type Article = {
    _id: string;
    title: string;
    publishedAt: string;
    mainImage: string;
    slug: { current: string };  // ✅ Corrigé
    body: TypedObject[];
};
