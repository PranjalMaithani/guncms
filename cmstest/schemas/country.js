export default {
  title: 'Country',
  name: 'country',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Flag',
      name: 'flag',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'flag',
    },
  },
};
