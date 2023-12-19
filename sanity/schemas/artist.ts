 
 import {defineType, defineField} from 'sanity'
 export const artist = defineType({

  title: 'Artist',
  name: 'artist',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Profile Picture',
      name: 'profilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Profile Pic Title',
      name: 'profilePicTitle',
      type: 'string',
    },
    {
      title: 'Image Gallery',
      name: 'imageGallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Dimensions',
              name: 'dimensions',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text',
            },
          ],
        },
      ],
    },

    /***Content Blocks */
    {
      name: 'statement',
      title: 'Statement',
      type: 'array',
      of: [
   
          {
            type: 'block',
            title: 'Block',
            // Styles let you set what your user can mark up blocks with. These
            // corrensponds with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'H1', value: 'h1' },
            ],
            lists: [
              { title: 'Bullet', value: 'bullet' },
              { title: 'Number', value: 'number' },
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
              // Decorators usually describe a single property – e.g. a typographic
              // preference or highlighting by editors.
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
              ],
              // Annotations can be any object structure – e.g. a link or a footnote.
              annotations: [
                {
                  title: 'URL',
                  name: 'link',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                    },
                  ],
                },
              ],
            },
          },
          
          {
            type: 'customImage',
          },
      ]
  },


    {
      title: 'Review',
      name: 'review',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
 })