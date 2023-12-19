import {defineType, defineField} from 'sanity'
export const homePage = defineType( {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Homepage Picture',
        name: 'homepagePicture',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
    ],
  })