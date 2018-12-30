import React, { Component } from 'react';
import GalleryLobby from '../components/GalleryLobby';
import { Route, Switch } from 'react-router' // react-router v4
import {connect} from "react-redux";

class GalleryManager extends Component{
    render(){
        console.log("pathname:"+this.props.pathname);
        console.log("search:"+this.props.search);
        console.log("hash:"+this.props.hash);
        console.log(this.props.galleryList);
        return(
            <Switch>
                <GalleryLobby/>
            </Switch>
        )
    }
}
function mapStateToProps(state) {
    return{
        pathname: state.router.location.pathname,
        search: state.router.location.search,
        hash: state.router.location.hash,
        galleryOperator: state.galleryOperator,
        galleryList:state.galleryList
    }
}

export default connect(mapStateToProps,null)(GalleryManager);