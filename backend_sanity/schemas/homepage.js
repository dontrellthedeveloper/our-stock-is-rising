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
            name: 'tagline',
            title: 'Banner Tagline',
            type: 'string',
        },
        {
            name: 'hpbuttonText',
            title: 'Banner Button Text',
            type: 'string',
        },
        {
            name: 'hpbuttonLink',
            title: 'Banner Button Link',
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
            type: 'markdown',
        },
        {
            name: 'boxLink',
            title: 'Box 1 Link',
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
            type: 'markdown',
        },
        {
            name: 'boxLink2',
            title: 'Box 2 Link',
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
            type: 'markdown',
        },
        {
            name: 'boxLink3',
            title: 'Box 3 Link',
            type: 'string',
        },
        {
            name: 'secPreheading',
            title: 'Section 1 Pre Heading',
            type: 'string',
        },
        {
            name: 'secHeading',
            title: 'Section 1 Heading',
            type: 'string',
        },
        {
            name: 'secSubheading',
            title: 'Section 1 Pre Heading/Left',
            type: 'string',
        },
        {
            name: 'secSubHeading2',
            title: 'Section 1 Heading/Left',
            type: 'string',
        },
        {
            type: "markdown",
            name: "secDescription",
            title: 'Section 1 Description',
        },
        {
            name: 'secLinkText',
            title: 'Section 1 Button Text',
            type: 'string'
        },
        {
            name: 'secLink',
            title: 'Section 1 Button Link',
            type: 'string',
        },
        {
            name: 'sec2Preheading',
            title: 'Section 2 Pre Heading',
            type: 'string',
        },
        {
            name: 'sec2Heading',
            title: 'Section 2 Heading',
            type: 'string',
        },
        {
            name: 'sec2Subheading',
            title: 'Section 2 Pre Heading/Left',
            type: 'string',
        },
        {
            name: 'sec2SubHeading2',
            title: 'Section 2 Heading/Left',
            type: 'string',
        },
        {
            name: 'sec2Description',
            title: 'Section 2 Description',
            type: 'markdown'
        },
        {
            name: 'sec2LinkText',
            title: 'Section 2 Button Text',
            type: 'string'
        },
        {
            name: 'sec2Link',
            title: 'Section 2 Button Link',
            type: 'string',
        },
        {
            name: 'sec3Preheading',
            title: 'Section 3 Pre Heading',
            type: 'string',
        },
        {
            name: 'sec3Heading',
            title: 'Section 3 Heading',
            type: 'string',
        },
        {
            name: 'sec3Subheading',
            title: 'Section 3 Pre Heading/Left',
            type: 'string',
        },
        {
            name: 'sec3SubHeading2',
            title: 'Section 3 Heading/Left',
            type: 'string',
        },
        {
            name: 'sec3Description',
            title: 'Section 3 Description',
            type: 'markdown'
        },
        {
            name: 'sec3LinkText',
            title: 'Section 3 Button Text',
            type: 'string'
        },
        {
            name: 'sec3Link',
            title: 'Section 3 Button Link',
            type: 'string',
        },
        {
            name: 'statement',
            title: 'Homepage Statement',
            type: 'markdown',
        },
        {
            name: 'standardsTitle',
            title: 'Core Statement Title',
            type: 'string',
        },
        {
            name: 'footerPreheading',
            title: 'Footer Contact Pre Heading',
            type: 'string',
        },
        {
            name: 'footerHeading',
            title: 'Footer Contact Heading',
            type: 'string',
        },
        {
            name: 'footerDescription',
            title: 'Footer Contact Description',
            type: 'string'
        },
        {
            name: 'footerCopyriight',
            title: 'Footer Copyright Text',
            type: 'string',
        }
    ],
};