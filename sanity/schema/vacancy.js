export default {
  name: "vacancy",
  type: "document",
  title: "Вакансии",
  fields: [
    {
      name: "title",
      type: "object",
      title: "Название вакансии",
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
      name: "requirements",
      type: "object",
      title: "Требования",
      fields: [
        {
          name: "ru",
          type: "array",
          title: "Русский",
          of: [{ type: "string" }],
        },
        {
          name: "uz",
          type: "array",
          title: "Узбекский",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "responsibilities",
      type: "object",
      title: "Обязанности",
      fields: [
        {
          name: "ru",
          type: "array",
          title: "Русский",
          of: [{ type: "string" }],
        },
        {
          name: "uz",
          type: "array",
          title: "Узбекский",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "conditions",
      type: "object",
      title: "Условия",
      fields: [
        {
          name: "ru",
          type: "array",
          title: "Русский",
          of: [{ type: "string" }],
        },
        {
          name: "uz",
          type: "array",
          title: "Узбекский",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активна",
      initialValue: true,
    },
  ],
};
