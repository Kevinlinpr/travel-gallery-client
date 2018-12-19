import React from 'react';
import { connect } from 'react-redux'
import Content from '../components/Content';
import { VisibilityFilters } from '../actions'
import GalleryControlledExpansionPanels from '../components/GalleryControlledExpansionPanels';
import AboutContent from '../components/AboutContent';
import GalleryContent from '../components/GalleryContent';
const getVisibleContent = (content) =>{
    console.log("update:"+content);
    switch (content) {
        case VisibilityFilters.HOME:
            return content;
        case VisibilityFilters.GALLERY:
            return <GalleryContent/>;
        case VisibilityFilters.ABOUT:
            return content;
        default:
            return content;
    }
};
const mapStateToProps = (state,ownProps) => ({
    filter: getVisibleContent(ownProps.filter)
});

export default connect(
    mapStateToProps,
    null
)(Content)
