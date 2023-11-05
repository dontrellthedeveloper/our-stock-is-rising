export default {
    name: 'homepage',
    title: 'HomePage',
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
            title: 'Business Card Info',
            type: 'string'
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
            name: 'description 2',
            title: 'Business Card Info 2',
            type: 'string'
        },
        {
            name: 'footerText',
            title: 'Footer Text',
            type: 'string',
        },
        {
            name: 'footerEmail',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'footerPhone',
            title: 'Phone Number',
            type: 'string',
        },

    ],
};