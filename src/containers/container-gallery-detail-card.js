import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";

const styles = {
    card: {
        minWidth: 275,
        marginTop:8,
        marginLeft:8
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class GalleryDetailCard extends Component {
    render(){
        const { classes } = this.props;
        console.log(this.props.galleryOperator);
        return (
            <div className={classes.card}>
                <Typography variant="h5" component="h2">
                    {this.props.galleryOperator.operatorObj.name}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {this.props.galleryOperator.operatorObj.time}
                </Typography>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        galleryOperator: state.galleryOperator
    }
}
export default connect(mapStateToProps,null)(withStyles(styles)(GalleryDetailCard));