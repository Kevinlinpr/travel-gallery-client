import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import OpenOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import {bindActionCreators} from "redux";
import {getGalleryList, openDestroyer} from "../actions";
import {connect} from "react-redux";
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        textAlign:'right'
    }
});
class GalleryList extends Component {
    constructor(props){
        super(props);
        fetch('http://127.0.0.1:3750/list/gallery')
            .then(res => {return res.json()})
            .then(res => {
                this.props.getGalleryList(res);
            });
    }
    state = {
        selectedIndex: 0,
    };
    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };
    render(){
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                {
                    this.props.galleryList.list.length===0?
                        <h4>暂时无数据</h4>:
                        <div>
                            {
                                this.props.galleryList.list.map((item,index)=>{
                                    return(
                                        <ListItem button={true} selected={this.state.selectedIndex === index}
                                                  onClick={event=>this.handleListItemClick(event,index)}
                                                  disableTouchRipple={true}
                                                  key={index}
                                        >
                                            <ListItemText primary={item.name} secondary={item.time} />
                                            {
                                                this.state.selectedIndex === index?
                                                    <div>
                                                        <IconButton aria-label="Search" className={classes.button} color={'primary'}>
                                                            <OpenOutlinedIcon />
                                                        </IconButton>
                                                        <IconButton aria-label="Delete" className={classes.button} color={'primary'}
                                                            onClick={()=>{
                                                                this.props.openDestroyer(item)}}
                                                        >
                                                            <DeleteOutlinedIcon />
                                                        </IconButton>
                                                    </div>:<div></div>
                                            }
                                        </ListItem>
                                    )
                                })
                            }
                        </div>
                }
            </List>
        );
    }
}
function mapStateToProps(state) {
    return{
        galleryList:state.galleryList,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openDestroyer: openDestroyer,getGalleryList: getGalleryList},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(GalleryList));