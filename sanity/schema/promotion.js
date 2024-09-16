export default {
    name: 'promotion',
    type: 'document',
    title: 'Акции',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Заголовок',
        fields: [
          { name: 'ru', type: 'string', title: 'Русский' },
          { name: 'uz', type: 'string', title: 'Узбекский' },
        ],
      },
      {
        name: 'shortDescription',
        type: 'object',
        title: 'Краткое описание',
        fields: [
          { name: 'ru', type: 'text', title: 'Русский' },
          { name: 'uz', type: 'text', title: 'Узбекский' },
        ],
      },
      {
        name: 'description',
        type: 'object',
        title: 'Описание',
        fields: [
          { name: 'ru', type: 'text', title: 'Русский' },
          { name: 'uz', type: 'text', title: 'Узбекский' },
        ],
      },
      {
        name: 'discount',
        type: 'string',
        title: 'Процент скидки',
        description: 'Процент скидки (например, 30%)',
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Изображение акции',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Дата акции',
      },
      {
        name: 'isActive',
        type: 'boolean',
        title: 'Активен',
        initialValue: true,
      },
      {
        name: 'relatedPromotions',
        type: 'array',
        title: 'Похожие акции',
        of: [{ type: 'reference', to: [{ type: 'promotion' }] }],
      },
      {
        name: 'navigateToUrl',
        type: 'url',
        title: 'URL для перехода',
      },
    ],
  };
  