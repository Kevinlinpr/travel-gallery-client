import React from 'react';
import { connect } from 'react-redux'
import Content from '../components/Content';
import {setVisibilityContent, VisibilityFilters} from '../actions'
import visibilityContent from '../reducers/visibilityContent'
import GalleryControlledExpansionPanels from '../components/GalleryControlledExpansionPanels';
import AboutContent from '../components/AboutContent';
import HomeContent from '../components/HomeContent';
const getVisibleContent = (content) =>{
    console.log("update:"+content);
    switch (content) {
        case VisibilityFilters.HOME:
            return content;
        case VisibilityFilters.GALLERY:
            return <GalleryControlledExpansionPanels/>;
        case VisibilityFilters.ABOUT:
            return <AboutContent/>;
        default:
            return content;
    }
};
const mapStateToProps = (state) => ({
    filter: getVisibleContent(state.visibilityContent)
});

export default connect(
    mapStateToProps,
    null
)(Content)
