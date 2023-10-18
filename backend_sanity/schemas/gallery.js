export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            title: 'description',
            name: 'description',
            type: 'text'
        },
        {
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'string',
        },
        {
            name: 'facebookLink',
            title: 'Facebook Link',
            type: 'string',
        },
        {
            name: 'twitterLink',
            title: 'Twitter Link',
            type: 'string',
        },
        {
            name: 'youtubeLink',
            title: 'Youtube Link',
            type: 'string',
        },
        {
            name: 'tiktokLink',
            title: 'Tiktok Link',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageUrl2',
            title: 'ImageUrl 2',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageUrl3',
            title: 'ImageUrl 3',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        // {
        //     name: 'tags',
        //     title: 'Tags',
        //     type:'array',
        //     of: [
        //         {
        //             name:'tag',
        //             title:'Tag',
        //             type:'string'
        //         }
        //     ]
        // },

    ],
};