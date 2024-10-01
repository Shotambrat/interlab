export default {
  name: 'service',
  type: 'document',
  title: 'Услуги',
  fields: [
    {
      name: 'name',
      type: 'object',
      title: 'Название сервиса',
      fields: [
        { name: 'ru', type: 'string', title: 'Русский' },
        { name: 'uz', type: 'string', title: 'Узбекский' },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL',
      options: {
        source: 'name.ru',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'object',
      title: 'Описание сервиса',
      fields: [
        {
          name: 'ru',
          type: 'blockContent', // Ensure this is of type 'blockContent'
          title: 'Описание на русском',
        },
        {
          name: 'uz',
          type: 'blockContent', // Ensure this is of type 'blockContent'
          title: 'Описание на узбекском',
        },
      ],
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
      title: 'Категория',
      validation: (Rule) => Rule.required().error('Категория обязательна для выбора'),
    },
    {
      name: 'details',
      type: 'object',
      title: 'Детали сервиса',
      fields: [
        {
          name: 'ru',
          type: 'blockContent', // Ensure this is of type 'blockContent'
          title: 'Детали на русском',
        },
        {
          name: 'uz',
          type: 'blockContent', // Ensure this is of type 'blockContent'
          title: 'Детали на узбекском',
        },
      ],
    },
  ],
};
