export default {
    name: 'extras',
    title: 'Extras',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            hidden: true
        },
        {
            name: 'name',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'preheading',
            title: 'Pre Heading',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'markdown'
        },
        {
            name: 'gameLink',
            title: 'Stock Game Link',
            type: 'string',
        },
        {
            name: 'gameText',
            title: 'Stock Game Text',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'Image1',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
};