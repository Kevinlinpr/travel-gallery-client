import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GalleryIcon from '@material-ui/icons/Map';
import AboutIcon from '@material-ui/icons/Chat';
export default function () {
    return[
        {
            id:1,
            name:'Home',
            icon:<HomeIcon/>
        },
        {
            id:2,
            name:'Gallery',
            icon:<GalleryIcon/>
        },
        {
            id:3,
            name:'About',
            icon:<AboutIcon/>
        }
    ]
}

