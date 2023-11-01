export default {
    name: 'about',
    title: 'About',
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
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'Image1',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name2',
            title: 'Page Title 2',
            type: 'string',
        },
        {
            name: 'preheading2',
            title: 'Pre Heading 2',
            type: 'string',
        },
        {
            name: 'heading2',
            title: 'Heading 2',
            type: 'string',
        },
        {
            name: 'description2',
            title: 'Description 2',
            type: 'string'
        },
        {
            name: 'imageUrl2',
            title: 'Image2',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
};