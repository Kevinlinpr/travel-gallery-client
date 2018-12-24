import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        width: '20%',
        margin: 1.5*theme.spacing.unit,
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
                          onClick={event=>this.handleListItemClick(event,0)}>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    {
                        this.state.selectedIndex === 0?
                            <Button variant="outlined" color="primary" className={classes.button}>
                                查看
                            </Button>:<div></div>
                    }
                </ListItem>
                <ListItem button={true} selected={this.state.selectedIndex === 1}
                          onClick={event=>this.handleListItemClick(event,1)}>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    {
                        this.state.selectedIndex === 1?
                            <Button variant="outlined" color="primary" className={classes.button}>
                                查看
                            </Button>:<div></div>
                    }
                </ListItem>
                <ListItem button={true} selected={this.state.selectedIndex === 2}
                          onClick={event=>this.handleListItemClick(event,2)}>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    {
                        this.state.selectedIndex === 2?
                            <Button variant="outlined" color="primary" className={classes.button}>
                                查看
                            </Button>:<div></div>
                    }
                </ListItem>
            </List>
        );
    }
}

export default withStyles(styles)(GalleryList);