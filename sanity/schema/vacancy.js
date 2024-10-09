// Импортируем библиотеку slugify для транслитерации
import slugify from 'slugify';

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
      name: "subtitle",
      type: "object",
      title: "Подзаголовок",
      fields: [
        { name: "ru", type: "string", title: "Русский" },
        { name: "uz", type: "string", title: "Узбекский" },
      ],
    },
    {
      name: "description",
      type: "object",
      title: "Описание",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title.ru", // Берем заголовок на русском
        maxLength: 96,
        slugify: (input) => slugify(input, { lower: true, strict: true, locale: 'ru' }), // Применяем slugify для кириллического текста
      },
    },
    {
      name: "requirements",
      type: "object",
      title: "Требования",
      fields: [
        {
          name: "ru",
          type: "blockContent",
          title: "Русский",
        },
        {
          name: "uz",
          type: "blockContent",
          title: "Узбекский",
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
          type: "blockContent",
          title: "Русский",
        },
        {
          name: "uz",
          type: "blockContent",
          title: "Узбекский",
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
          type: "blockContent",
          title: "Русский",
        },
        {
          name: "uz",
          type: "blockContent",
          title: "Узбекский",
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
