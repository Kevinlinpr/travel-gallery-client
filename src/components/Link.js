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
const Link = ({filter, children , onClick }) => (
    <NavLink
        to={filter === VisibilityFilters.HOME ? '/' : `/${filter}`}
    >
        <div onClick={onClick}>
            <ListItem button>
                <ListItemIcon><ListCustomItemIcon filter={filter}/></ListItemIcon>
                <ListItemText primary={filter} />
            </ListItem>
        </div>
    </NavLink>

);
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

export default Link