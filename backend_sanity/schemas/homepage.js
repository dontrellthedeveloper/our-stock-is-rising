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
            name: 'hptitle',
            title: 'Homepage Title',
            type: 'string',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'hpbutton',
            title: 'Homepage Button',
            type: 'string',
        },
        {
            name: 'boxheading',
            title: 'Box 1 Heading',
            type: 'string'
        },
        {
            name: 'boxtext',
            title: 'Box 1 Text',
            type: 'string',
        },
        {
            name: 'boxheading2',
            title: 'Box 2 Heading',
            type: 'string'
        },
        {
            name: 'boxtext2',
            title: 'Box 2 Text',
            type: 'string',
        },
        {
            name: 'boxheading3',
            title: 'Box 3 Heading',
            type: 'string'
        },
        {
            name: 'boxtext3',
            title: 'Box 3 Text',
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
            name: 'preheading3',
            title: 'Pre Heading 3',
            type: 'string',
        },
        {
            name: 'heading3',
            title: 'Heading 3',
            type: 'string',
        },
        {
            name: 'description 3',
            title: 'Business Card Info 3',
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