import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GalleryIcon from '@material-ui/icons/Map';
import AboutIcon from '@material-ui/icons/Sms';

const Link = ({children , onClick }) => (
    <div onClick={onClick}>
        <ListItem button>
            <ListItemIcon>{children==='Home'?<HomeIcon/>:children==='Gallery'?<GalleryIcon/>:<AboutIcon/>}</ListItemIcon>
            <ListItemText primary={children} />
        </ListItem>
    </div>
);


export default Link