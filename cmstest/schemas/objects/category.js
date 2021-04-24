export default {
  title: 'Category',
  name: 'category',
  type: 'object',
  fields: [
    {
      title: 'Gun Category',
      name: 'type',
      type: 'string',
      options: {
        list: [
          'Handgun',
          'Sub-Machine Gun',
          'Shotgun',
          'Rifle',
          'Machine Gun',
          'Sniper Rifle',
        ],
      },
    },
    {
      title: 'Action Type',
      description: 'How are rounds feeded and extracted?',
      name: 'action',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Slug Tags',
      name: 'slugs',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: true,
    },
  ],
};
