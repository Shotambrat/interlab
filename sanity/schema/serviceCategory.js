export default {
    name: "serviceCategory",
    type: "document",
    title: "Категория услуг",
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
          source: "name.ru", // Для формирования slug используем русское название
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
      {
        name: "services",
        type: "array",
        title: "Сервисы",
        of: [{ type: "reference", to: [{ type: "service" }] }],
      },
      {
        name: "icon",
        type: "image",
        title: "Иконка категории",
      },
    ],
  };
  