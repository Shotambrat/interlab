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
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'uz', type: 'string', title: 'Узбекский' },
        ],
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name.ru',
          maxLength: 96,
          slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
        },
      },
      {
        name: 'position',
        type: 'object',
        title: 'Должность',
        fields: [
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'uz', type: 'string', title: 'Узбекский' },
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
        type: 'array',
        title: 'Языки',
        of: [{ type: 'string' }],
      },
      {
        name: 'experience',
        type: 'string',
        title: 'Опыт работы',
      },
      {
        name: 'education',
        type: 'object',
        title: 'Образование',
        fields: [
          { name: 'ru', type: 'text', title: 'Русский' },
          { name: 'uz', type: 'text', title: 'Узбекский' },
        ],
      },
      {
        name: 'achievements',
        type: 'object',
        title: 'Достижения',
        fields: [
          { name: 'ru', type: 'text', title: 'Русский' },
          { name: 'uz', type: 'text', title: 'Узбекский' },
        ],
      },
      {
        name: 'workHours',
        type: 'object',
        title: 'График работы',
        fields: [
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'uz', type: 'string', title: 'Узбекский' },
        ],
      },
      {
        name: 'isActive',
        type: 'boolean',
        title: 'Активен',
        initialValue: true,
      },
    ],
  };
  