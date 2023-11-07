export default {
    name: 'updates',
    title: 'Updates',
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
            title: 'Heading 1',
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
            name: 'mailLink',
            title: 'Mailink List Link',
            type: 'string',
        },
        {
            name: 'mailText',
            title: 'Mailing List Text',
            type: 'string'
        },
    ],
};