export default {
  name: "featuredTests",
  type: "document",
  title: "Популярные анализы",
  fields: [
    {
      name: "title",
      type: "object",
      title: "Заголовок блока",
      fields: [
        { name: "ru", type: "string", title: "Русский" },
        { name: "uz", type: "string", title: "Узбекский" },
      ],
    },
    {
      name: "tests",
      type: "array",
      title: "Популярные анализы",
      of: [{ type: "reference", to: { type: "test" } }],
    },
  ],
};
