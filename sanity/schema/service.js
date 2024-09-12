export default {
  name: "service",
  type: "document",
  title: "Сервис",
  fields: [
    {
      name: "name",
      type: "object",
      title: "Название сервиса",
      fields: [
        { name: "ru", type: "string", title: "Русский" },
        { name: "uz", type: "string", title: "Узбекский" },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "URL",
      options: {
        source: "name.ru",
        maxLength: 96,
      },
    },
    {
      name: "description",
      type: "object",
      title: "Описание сервиса",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "serviceCategory" }],
      title: "Категория",
    },
    {
      name: "icon",
      type: "image",
      title: "Иконка сервиса",
    },
    {
      name: "details",
      type: "object",
      title: "Детали сервиса",
      fields: [
        {
          name: "ru",
          type: "blockContent", // Поддержка редактируемой разметки на русском
          title: "Детали на русском",
        },
        {
          name: "uz",
          type: "blockContent", // Поддержка редактируемой разметки на узбекском
          title: "Детали на узбекском",
        },
      ],
    },
  ],
};
