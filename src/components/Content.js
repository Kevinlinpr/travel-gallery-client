import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GalleryIcon from '@material-ui/icons/Map';
import AboutIcon from '@material-ui/icons/Sms';
import {VisibilityFilters} from "../actions";

const Content = ({filter}) => (
    <ListItem>
        <ListItemIcon><ListCustomItemIcon filter={filter}/></ListItemIcon>
        <ListItemText primary={filter} />
    </ListItem>
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

export default Content