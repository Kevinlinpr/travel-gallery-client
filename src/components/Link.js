import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GalleryIcon from '@material-ui/icons/Map';
import AboutIcon from '@material-ui/icons/Sms';
import {VisibilityFilters} from "../actions";
import { NavLink } from 'react-router-dom'
function Link(props){
    return(
        <div onClick={props.onClick}>
            <NavLink
                to={props.filter === VisibilityFilters.HOME ? '/' : `/${props.filter}`}
            >
                <ListItem button>
                    <ListItemIcon><ListCustomItemIcon filter={props.filter}/></ListItemIcon>
                    <ListItemText primary={props.filter}/>
                </ListItem>
            </NavLink>
        </div>
    )
}
const ListCustomItemIcon = (props) =>{
    return(
        <div>
            {
                props.filter === VisibilityFilters.HOME ? <HomeIcon/> :
                    props.filter === VisibilityFilters.GALLERY ? <GalleryIcon/> :
                        props.filter === VisibilityFilters.ABOUT ? <AboutIcon/> :
                            <div/>
            }
        </div>
    )
};

export default Link;