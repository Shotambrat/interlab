export default {
  name: "blockContent",
  title: "Редактируемый текст",
  type: "array",
  of: [
    {
      type: "block",
      title: "Блок текста",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Заголовок 1", value: "h1" },
        { title: "Заголовок 2", value: "h2" },
        { title: "Заголовок 3", value: "h3" },
        { title: "Заголовок 4", value: "h4" },
        { title: "Цитата", value: "blockquote" },
      ],
      lists: [
        { title: "Маркированный список", value: "bullet" },
        { title: "Нумерованный список", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Жирный", value: "strong" },
          { title: "Курсив", value: "em" },
          { title: "Подчеркнутый", value: "underline" },
          { title: "Зачеркнутый", value: "strike-through" },
          { title: "Красный цвет", value: "redText" },  // Добавляем этот декоратор
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Ссылка",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
