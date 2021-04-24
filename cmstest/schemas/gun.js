export default {
  title: 'Gun',
  name: 'gun',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },

    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      title: 'Country',
      name: 'country',
      type: 'reference',
      to: [{ type: 'country' }],
      weak: true,
    },

    {
      title: 'Year of Origin',
      name: 'year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    },

    {
      title: 'Caliber',
      name: 'caliber',
      type: 'reference',
      to: [{ type: 'caliber' }],
      weak: true,
    },

    {
      title: 'Stats',
      name: 'stats',
      type: 'stats',
    },

    {
      title: 'Variant',
      name: 'variant',
      type: 'array',
      of: [
        {
          type: 'variant',
        },
      ],
    },

    {
      title: 'Category',
      name: 'category',
      type: 'category',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 30,
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
