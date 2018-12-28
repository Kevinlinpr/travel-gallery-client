import React, { Component } from 'react';
import GalleryList from '../containers/container-gallery-list';
import GalleryCreator from './GalleryCreator';
class GalleryOperator extends Component{
    render(){
        return(
            <div>
                <GalleryCreator/>
                <GalleryList/>
            </div>
        )
    }
}
export default GalleryOperator;