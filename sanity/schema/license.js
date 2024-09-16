export default {
  name: "license",
  type: "document",
  title: "Лицензии",
  fields: [
    {
      name: "title",
      type: "object",
      title: "Название лицензии",
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
      name: "description",
      type: "object",
      title: "Описание лицензии",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "photo",
      type: "image",
      title: "Изображение лицензии",
      options: {
        hotspot: true,
      },
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активна",
      initialValue: true,
    },
  ],
};
