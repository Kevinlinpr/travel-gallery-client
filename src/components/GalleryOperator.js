import React, { Component } from 'react';
import GalleryList from './GalleryList';
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