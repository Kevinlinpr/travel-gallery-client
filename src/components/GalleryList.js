import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import OpenOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
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
                <ListItem button={true} selected={this.state.selectedIndex === 0}
                          onClick={event=>this.handleListItemClick(event,0)}
                          disableTouchRipple={true}>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    {
                        this.state.selectedIndex === 0?
                            <div>
                                <IconButton aria-label="Search" className={classes.button} color={'primary'}>
                                    <OpenOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="Delete" className={classes.button} color={'primary'}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>:<div></div>
                    }
                </ListItem>
                <ListItem button={true} selected={this.state.selectedIndex === 1}
                          onClick={event=>this.handleListItemClick(event,1)}
                          disableTouchRipple={true}>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    {
                        this.state.selectedIndex === 1?
                            <div>
                                <IconButton aria-label="Search" className={classes.button} color={'primary'}>
                                    <OpenOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="Delete" className={classes.button} color={'primary'}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>:<div></div>
                    }
                </ListItem>
                <ListItem button={true} selected={this.state.selectedIndex === 2}
                          onClick={event=>this.handleListItemClick(event,2)}
                          disableTouchRipple={true}>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    {
                        this.state.selectedIndex === 2?
                            <div>
                                <IconButton aria-label="Search" className={classes.button} color={'primary'}>
                                    <OpenOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="Delete" className={classes.button} color={'primary'}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </div>:<div></div>
                    }
                </ListItem>
            </List>
        );
    }
}

export default withStyles(styles)(GalleryList);