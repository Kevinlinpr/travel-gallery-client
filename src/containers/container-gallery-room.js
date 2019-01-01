import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {backToGalleryLobby, closeGalleryBackToLobby,loadGalleryInfo,openUploader} from "../actions";
import GalleryDetailCard from './container-gallery-detail-card';
import GalleryRoomPhotosViewer from './container-gallery-room-photos-viewer';
import GalleryRoomUploader from './container-gallery-room-uploader';
const styles = theme => ({
    button: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    dense: {
        marginTop: 8,
    },
});
class GalleryManager extends Component{
    constructor(props){
        super(props);
        const {id} = this.props.match.params;
        fetch('http://127.0.0.1:3750/gallery/room/info',{
            method:'POST',
            body:JSON.stringify({
                _id:id
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {return res.json()})
            .then(res => {
                this.props.loadGalleryInfo(res[0]);
            });
    }

    render(){
        // console.log("pathname:"+this.props.pathname);
        // console.log("search:"+this.props.search);
        // console.log("hash:"+this.props.hash);
        const { classes } = this.props;
        return(
            <div>
                <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{
                    this.props.closeGalleryBackToLobby();
                    this.props.backToGalleryLobby();
                }}
                        disableTouchRipple={true}>
                    返回
                </Button>
                <GalleryDetailCard/>
                <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{
                    this.props.openUploader();
                }}
                        disableTouchRipple={true}>
                    上传照片
                </Button>
                <GalleryRoomPhotosViewer/>
                <GalleryRoomUploader/>
            </div>
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
function matchDispatchToProps(dispatch) {
    return bindActionCreators({closeGalleryBackToLobby:closeGalleryBackToLobby,
        backToGalleryLobby:backToGalleryLobby,loadGalleryInfo:loadGalleryInfo,openUploader:openUploader},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(GalleryManager));