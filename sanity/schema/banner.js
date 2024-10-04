export default {
    name: 'banner',
    type: 'document',
    title: 'Баннер',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Заголовок',
        fields: [
          {
            name: 'uz',
            type: 'string',
            title: 'Узбекский',
          },
          {
            name: 'ru',
            type: 'string',
            title: 'Русский',
          },
        ],
      },
      {
        name: 'subtitle',
        type: 'object',
        title: 'Подзаголовок',
        fields: [
          {
            name: 'uz',
            type: 'string',
            title: 'Узбекский',
          },
          {
            name: 'ru',
            type: 'string',
            title: 'Русский',
          },
        ],
      },
      {
        name: 'description',
        type: 'object',
        title: 'Описание',
        fields: [
          {
            name: 'uz',
            type: 'text',
            title: 'Узбекский',
          },
          {
            name: 'ru',
            type: 'text',
            title: 'Русский',
          },
        ],
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Изображение баннера',
      },
      {
        name: 'navigateToUrl',
        type: 'url',
        title: 'URL для перехода',
      },
      {
        name: 'active',
        type: 'boolean',
        title: 'Активен',
        initialValue: true,
      },
    ],
  };