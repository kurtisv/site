import { defineType, defineField } from 'sanity';

export const postType = defineType({
  name: 'post', // 🔹 Identifiant du type de document dans Sanity
  title: 'Posts', // 🔹 Titre affiché dans le CMS
  type: 'document', // 🔹 Type de contenu (document principal)
  fields: [
    /**
     * 📌 Titre de l'article
     * - Obligatoire
     * - Minimum 5 caractères, maximum 100
     */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),

    /**
     * 📌 Slug unique pour l'URL de l'article
     * - Généré automatiquement à partir du titre
     * - Longueur max : 96 caractères
     */
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    /**
     * 📌 Référence vers l'auteur de l'article
     * - L'auteur doit être un document de type "author"
     */
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),

    /**
     * 📌 Date de publication de l'article
     * - Stockée en format `datetime`
     */
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    /**
     * 📌 Image principale de l'article
     * - Utilise l'option `hotspot` pour ajuster l'affichage
     */
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),

    /**
     * 📌 Contenu principal de l'article
     * - Utilise un éditeur de texte enrichi (`blockContent`)
     */
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
});
