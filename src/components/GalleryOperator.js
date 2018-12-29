import React, { Component } from 'react';
import GalleryList from '../containers/container-gallery-list';
import GalleryCreator from '../containers/container-gallery-creator';
import GalleryDestroyer from '../containers/container-gallery-destroyer';
class GalleryOperator extends Component{
    render(){
        return(
            <div>
                <GalleryCreator/>
                <GalleryDestroyer/>
                <GalleryList/>
            </div>
        )
    }
}
export default GalleryOperator;