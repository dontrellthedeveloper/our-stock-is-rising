export default {
    name: 'shop',
    title: 'Shop',
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
            title: 'Book Synopsis',
            type: 'markdown'
        },
        {
            name: 'bookLink',
            title: 'Austin Macauley Link',
            type: 'string',
        },
        {
            name: 'bookText',
            title: 'Purchase Button Text',
            type: 'string',
        },
        {
            name: 'amazonLink',
            title: 'Amazon Kindle Link',
            type: 'string',
        },
        {
            name: 'amazonText',
            title: 'Amazon Button Text',
            type: 'string',
        },
        {
            name: 'barnesLink',
            title: 'Barnes & Noble Link',
            type: 'string',
        },
        {
            name: 'barnesText',
            title: 'Barnes & Noble Button Text',
            type: 'string',
        },
        {
            name: 'footerText',
            title: 'Footer Text',
            type: 'string',
        },
        {
            name: 'footerEmail',
            title: 'Footer Email',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'Book Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }

    ],
};