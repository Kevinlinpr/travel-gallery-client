import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {backToGalleryLobby, closeGalleryBackToLobby} from "../actions";
import Typography from '@material-ui/core/Typography';
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
    render(){
        console.log("pathname:"+this.props.pathname);
        console.log("search:"+this.props.search);
        console.log("hash:"+this.props.hash);
        const {id} = this.props.match.params;
        console.log(id);
        const { classes } = this.props;
        console.log(this.props.galleryOperator);
        return(
            <div>
                <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{
                    this.props.closeGalleryBackToLobby();
                    this.props.backToGalleryLobby();

                }}
                        disableTouchRipple={true}>
                    返回
                </Button>
                <Typography variant="button" gutterBottom className={classes.text}>
                    {
                        this.props.galleryOperator.operatorObj.name
                    }
                </Typography>
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
    return bindActionCreators({closeGalleryBackToLobby:closeGalleryBackToLobby,backToGalleryLobby:backToGalleryLobby},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(GalleryManager));