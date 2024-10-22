export default {
  name: 'banner',
  type: 'document',
  title: 'Баннер',
  fields: [
    {
      name: 'titleSubtitle',
      type: 'object', // Делаем поле объектом
      title: 'Заголовок и подзаголовок',
      fields: [
        {
          name: 'uz',
          type: 'blockContent',  // Используем blockContent для узбекского языка
          title: 'Узбекский заголовок и подзаголовок',
          description: 'Введите заголовок и подзаголовок на узбекском языке. Вы можете изменять цвет отдельных слов.',
        },
        {
          name: 'ru',
          type: 'blockContent',  // Используем blockContent для русского языка
          title: 'Русский заголовок и подзаголовок',
          description: 'Введите заголовок и подзаголовок на русском языке. Вы можете изменять цвет отдельных слов.',
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
      name: 'backgroundPhoto',
      type: 'image',
      title: 'Фоновое изображение баннера',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'navigateToUrl',
      type: 'object',
      title: 'URL для перехода',
      fields: [
        {
          name: 'uz',
          type: 'url',
          title: 'URL для узбекского языка',
        },
        {
          name: 'ru',
          type: 'url',
          title: 'URL для русского языка',
        },
      ],
    },
    {
      name: 'buttonText',  // Поле для текста кнопки
      type: 'object',
      title: 'Текст кнопки',
      fields: [
        {
          name: 'uz',
          type: 'string',
          title: 'Текст на узбекском',
        },
        {
          name: 'ru',
          type: 'string',
          title: 'Текст на русском',
        },
      ],
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Активен',
      initialValue: true,
    },
  ],
};
