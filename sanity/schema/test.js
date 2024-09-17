export default {
  name: "test",
  type: "document",
  title: "Анализ",
  fields: [
    {
      name: "name",
      type: "object",
      title: "Название анализа",
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
      name: "shortDescription",
      type: "object",
      title: "Краткое описание",
      fields: [
        { name: "ru", type: "string", title: "Русский" },
        { name: "uz", type: "string", title: "Узбекский" },
      ],
    },  
    {
      name: "description",
      type: "object",
      title: "Описание анализа",
      fields: [
        { name: "ru", type: "blockContent", title: "Русский" },
        { name: "uz", type: "blockContent", title: "Узбекский" },
      ],
    },
    {
      name: "price",
      type: "number",
      title: "Цена",
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "testCategory" }],
      title: "Категория",
      validation: (Rule) =>
        Rule.required().error("Категория обязательна для выбора"),
    },
    {
      name: "isPopular",
      type: "boolean",
      title: "Популярный анализ",
      initialValue: false,
    },
  ],
};
