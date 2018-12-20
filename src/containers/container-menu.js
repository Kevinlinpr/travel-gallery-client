import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {closeMenu, openMenu} from "../actions";
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuBar extends Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div onClick={()=>{this.props.openMenu()}}>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            TravelGallery
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        menuActive: state.menuActive
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openMenu: openMenu,closeMenu:closeMenu},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withStyles(styles)(MenuBar));