import React, { Component } from 'react';
import { Map } from 'react-amap';
const YOUR_AMAP_KEY = 'fd73199240ef1a8ffe2c3f86f412d8d9';
class GalleryMap extends Component{
    render(){
        return(
            <div style={{width: '100%', height: '400px'}}>
                <Map amapkey={'fd73199240ef1a8ffe2c3f86f412d8d9'}/>
            </div>
        )
    }
}
export default GalleryMap;