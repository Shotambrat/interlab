export default {
    name: 'instruction',
    type: 'document',
    title: 'Инструкции',
    fields: [
      {
        name: 'title',
        type: 'object',
        title: 'Название',
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
          source: 'title.ru',
          maxLength: 96,
          slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
        },
      },
      {
        name: 'generalRecommendations',
        type: 'object',
        title: 'Общие рекомендации',
        fields: [
          { name: 'ru', type: 'array', title: 'Русский', of: [{ type: 'string' }] },
          { name: 'uz', type: 'array', title: 'Узбекский', of: [{ type: 'string' }] },
        ],
      },
      {
        name: 'detailedInstructions',
        type: 'object',
        title: 'Инструкция',
        fields: [
          { name: 'ru', type: 'array', title: 'Русский', of: [{ type: 'block' }] },
          { name: 'uz', type: 'array', title: 'Узбекский', of: [{ type: 'block' }] },
        ],
      },
      {
        name: 'relatedInstructions',
        type: 'array',
        title: 'Связанные инструкции',
        of: [{ type: 'reference', to: [{ type: 'instruction' }] }],
      },
      {
        name: 'isActive',
        type: 'boolean',
        title: 'Активен',
        initialValue: true,
      },
    ],
  };
  