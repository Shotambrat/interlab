export default {
  name: "news",
  type: "document",
  title: "Новости",
  fields: [
    {
      name: "title",
      type: "object",
      title: "Заголовок",
      fields: [
        { name: "ru", type: "string", title: "Русский" },
        { name: "uz", type: "string", title: "Узбекский" },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title.ru",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    },
    {
      name: "shortDescription",
      type: "object",
      title: "Краткое описание",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "content",
      type: "object",
      title: "Содержание",
      fields: [
        {
          name: "ru",
          type: "array",
          title: "Русский",
          of: [{ type: "block" }],
        },
        {
          name: "uz",
          type: "array",
          title: "Узбекский",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Дата публикации",
    },
    {
      name: "photo",
      type: "image",
      title: "Изображение",
      options: {
        hotspot: true,
      },
    },
    {
      name: "relatedNews",
      type: "array",
      title: "Похожие новости",
      of: [{ type: "reference", to: [{ type: "news" }] }],
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активна",
      initialValue: true,
    },
  ],
};
