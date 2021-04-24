export default {
  title: 'Bullet Caliber',
  name: 'caliber',
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
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
