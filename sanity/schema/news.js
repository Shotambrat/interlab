export default {
  name: "news",
  type: "document",
  title: "Новости",
  fields: [
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
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title.ru",
        maxLength: 96,
        slugify: (input) => {
          const map = {
            а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
            з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
            п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
            ч: "ch", ш: "sh", щ: "shch", ы: "y", э: "e", ю: "yu", я: "ya",
            А: "A", Б: "B", В: "V", Г: "G", Д: "D", Е: "E", Ё: "Yo", Ж: "Zh",
            З: "Z", И: "I", Й: "Y", К: "K", Л: "L", М: "M", Н: "N", О: "O",
            П: "P", Р: "R", С: "S", Т: "T", У: "U", Ф: "F", Х: "Kh", Ц: "Ts",
            Ч: "Ch", Ш: "Sh", Щ: "Shch", Ы: "Y", Э: "E", Ю: "Yu", Я: "Ya"
          };

          const transliterate = (text) => {
            return text
              .split('')
              .map((char) => map[char] || char)
              .join('');
          };

          // Apply transliteration to convert Cyrillic to Latin
          return transliterate(input)
            .toLowerCase()
            .replace(/\s+/g, '-')  // Replace spaces with hyphens
            .replace(/[^a-zA-Z0-9-]/g, '')  // Remove invalid characters
            .slice(0, 96);  // Limit to 96 characters
        },
      },
    },
    {
      name: "shortDescription",
      type: "object",
      title: "Краткое описание",
      fields: [
        { name: "ru", type: "text", title: "Русский" },
        { name: "uz", type: "text", title: "Узбекский" },
      ],
    },
    {
      name: "content",
      type: "object",
      title: "Содержание",
      fields: [
        {
          name: "ru",
          type: "array",
          title: "Русский",
          of: [{ type: "block" }],
        },
        {
          name: "uz",
          type: "array",
          title: "Узбекский",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Дата публикации",
    },
    {
      name: "photo",
      type: "image",
      title: "Изображение",
      options: {
        hotspot: true,
      },
    },
    {
      name: "relatedNews",
      type: "array",
      title: "Похожие новости",
      of: [{ type: "reference", to: [{ type: "news" }] }],
    },
    {
      name: "isActive",
      type: "boolean",
      title: "Активна",
      initialValue: true,
    },
  ],
};
