export default {
  name: 'doctor',
  type: 'document',
  title: 'Врачи',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Имя',
      fields: [
        { name: 'ru', type: 'string', title: 'Имя на русском' },
        { name: 'uz', type: 'string', title: 'Имя на узбекском' },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name.ru',
        maxLength: 96,
        slugify: (input) => {
          const map = {
            а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
            з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
            п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
            ч: 'ch', ш: 'sh', щ: 'shch', ы: 'y', э: 'e', ю: 'yu', я: 'ya',
            А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'Yo', Ж: 'Zh',
            З: 'Z', И: 'I', Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O',
            П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'Kh', Ц: 'Ts',
            Ч: 'Ch', Ш: 'Sh', Щ: 'Shch', Ы: 'Y', Э: 'E', Ю: 'Yu', Я: 'Ya',
          };

          const transliterate = (text) => {
            return text.split('').map((char) => map[char] || char).join('');
          };

          return transliterate(input)
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-]/g, '')
            .slice(0, 96);
        },
      },
    },
    {
      name: 'position',
      type: 'object',
      title: 'Должность',
      fields: [
        {
          name: 'ru',
          type: 'array',
          title: 'Должность (Русский)',
          of: [{ type: 'string' }],
        },
        {
          name: 'uz',
          type: 'array',
          title: 'Должность (Узбекский)',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Фотография',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'languages',
      type: 'object',
      title: 'Знание языков',
      fields: [
        { name: 'ru', type: 'string', title: 'Языки на русском' },
        { name: 'uz', type: 'string', title: 'Языки на узбекском' },
      ],
    },
    {
      name: 'experience',
      type: 'object',
      title: 'Опыт работы',
      fields: [
        { name: 'ru', type: 'text', title: 'Опыт на русском' },
        { name: 'uz', type: 'text', title: 'Опыт на узбекском' },
      ],
    },
    {
      name: 'education',
      type: 'object',
      title: 'Образование',
      fields: [
        { name: 'ru', type: 'text', title: 'Образование на русском' },
        { name: 'uz', type: 'text', title: 'Образование на узбекском' },
      ],
    },
    {
      name: 'achievements',
      type: 'object',
      title: 'Достижения',
      fields: [
        { name: 'ru', type: 'text', title: 'Достижения на русском' },
        { name: 'uz', type: 'text', title: 'Достижения на узбекском' },
      ],
    },
    {
      name: 'workHours',
      type: 'object',
      title: 'График работы',
      fields: [
        {
          name: 'ru',
          type: 'array',
          title: 'График работы (Русский)',
          of: [{ type: 'string' }],
        },
        {
          name: 'uz',
          type: 'array',
          title: 'График работы (Узбекский)',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Активен',
      initialValue: true,
    },
    // Новое поле для выбора услуг
    {
      name: 'services',
      type: 'array',
      title: 'Услуги',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Выберите услуги, которые предоставляет врач',
    },
  ],
};
