export default {
  name: "partnerReview",
  type: "document",
  title: "Отзывы от партнеров",
  fields: [
    {
      name: "companyName",
      type: "object",
      title: "Название компании",
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
        source: "companyName.ru",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    },
    {
      name: "logo",
      type: "image",
      title: "Логотип компании",
      options: {
        hotspot: true,
      },
    },
    {
      name: "reviewText",
      type: "object",
      title: "Текст отзыва",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активен",
      initialValue: true,
    },
  ],
};
