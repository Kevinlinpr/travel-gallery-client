import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GalleryIcon from '@material-ui/icons/Map';
import AboutIcon from '@material-ui/icons/Chat';
export const ContentType = {
    Home: 'Home',
    Gallery: 'Gallery',
    About: 'About'
};
export default function () {
    return[
        {
            id:1,
            name:ContentType.Home,
            icon:<HomeIcon/>,
            router: ''
        },
        {
            id:2,
            name:ContentType.Gallery,
            icon:<GalleryIcon/>,
            router: 'gallery'
        },
        {
            id:3,
            name:ContentType.About,
            icon:<AboutIcon/>,
            router: 'about'
        }
    ]
}

