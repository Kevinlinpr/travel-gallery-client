import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import {openMenu,closeMenu} from '../actions';
import {bindActionCreators} from 'redux';
const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Navigations extends React.Component {
    createNavigation(){
        return this.props.navigations.map((selected)=>{
            return(
                <ListItem button key={selected.id}>
                    <ListItemIcon>{selected.icon}</ListItemIcon>
                    <ListItemText primary={selected.name} />
                </ListItem>
            )
        })
    }

    render() {
        const { classes } = this.props;
        const fullList = (
            <div className={classes.fullList}>
                <List>
                    {this.createNavigation()}
                </List>
            </div>
        );
        return (
            <div>
                <Drawer anchor="top" open={this.props.menuActive.active} onClose={()=>{this.props.closeMenu()}}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={()=>{this.props.closeMenu()}}
                        onKeyDown={()=>{this.props.closeMenu()}}
                    >
                        {fullList}
                    </div>
                </Drawer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        navigations: state.navigations,
        menuActive: state.menuActive
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openMenu: openMenu,closeMenu:closeMenu},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(Navigations));