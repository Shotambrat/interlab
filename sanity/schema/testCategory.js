export default {
    name: "testCategory",
    type: "document",
    title: "Категория анализов",
    fields: [
      {
        name: "name",
        type: "object",
        title: "Название категории",
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
        title: "Описание категории",
        fields: [
          { name: "ru", type: "text", title: "Русский" },
          { name: "uz", type: "text", title: "Узбекский" },
        ],
      },
    ],
  };
  