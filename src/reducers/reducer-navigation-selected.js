import React from 'react';
import {NavigationsType} from '../actions'
import {ContentType} from './reducer-navigations'
import HomeContent from '../components/Home';
import GalleryContent from '../components/Gallery';
import AboutContent from '../components/About';
export default function (state={content: <HomeContent/>},action) {

    switch (action.type) {
        case NavigationsType.NAVIGATIONS_SELECTED:
            switch (action.payload) {
                case ContentType.Home:
                    return {
                        content: <HomeContent/>
                    };
                case ContentType.Gallery:
                    return {
                        content: <GalleryContent/>
                    };
                case ContentType.About:
                    return {
                        content: <AboutContent/>
                    };
                default:
                    return {
                        content: <HomeContent/>
                    };
            }
        default:
            return {
                content: state.content
            }
    }
}