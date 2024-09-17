export default {
  name: "promotion",
  type: "document",
  title: "Акции",
  fields: [
    {
      name: "icon",
      type: "object",
      title: "Иконка",
      fields: [
        {
          name: "ru",
          type: "image",
          title: "Иконка на русском",
          options: {
            hotspot: true,
          },
        },
        {
          name: "uz",
          type: "image",
          title: "Иконка на узбекском",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "backgroundPhoto",
      type: "image",
      title: "Фото фона",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      type: "object",
      title: "Заголовок",
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
        { name: "ru", type: "blockContent", title: "Русский" },
        { name: "uz", type: "blockContent", title: "Узбекский" },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: (doc) => doc.title.ru,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[а-яё]/g, (c) => cyrillicToLatinMap[c] || c)
            .replace(/[^a-z0-9]+/g, '-') // заменяет все кроме латинских символов и цифр на дефисы
            .replace(/(^-|-$)+/g, ''), // убирает дефисы в начале и в конце
        maxLength: 96,
      },
    },
    {
      name: "date",
      type: "datetime",
      title: "Дата создания",
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активен",
      initialValue: true,
    },
  ],
};

// Карта для конвертации кириллических символов в латинские
const cyrillicToLatinMap = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'kh',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sch',
  'ъ': '',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
};
