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
      name: "shortTitle",
      type: "object",
      title: "Короткий заголовок",
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
    {
      name: "icon",
      type: "image",
      title: "Иконка категории",
    },
    {
      name: "colourCode",
      type: "string",
      title: "Цвет карточки",
      description: "Цвет в формате HEX, например, #FFA07A",
    },
    {
      name: "order",
      type: "number",
      title: "Порядковый номер",
    },
    {
      name: "isPopular",
      type: "boolean",
      title: "Популярный",
      initialValue: false,
    },
  ],
};
