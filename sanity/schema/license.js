import slugify from 'slugify';

// Функция для транслитерации
const transliterate = (input) => {
  const ruToLatMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya', ' ': '-',
  };

  return input.toLowerCase().split('').map(char => ruToLatMap[char] || char).join('');
};

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
        slugify: (input) => transliterate(input).replace(/\s+/g, "-").slice(0, 96),
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
