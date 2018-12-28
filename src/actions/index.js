import {push} from 'connected-react-router';

export const openMenu = () =>{
    return {
        type: MenuType.CLOSE_MENU,
        payload: true
    }
};
export const closeMenu = () =>{
    return {
        type: MenuType.OPEN_MENU,
        payload: false
    }
};

export const MenuType = {
    OPEN_MENU:'OPEN_MENU',
    CLOSE_MENU:'CLOSE_MENU'
};

export const navigationsSelected = (selected) => (dispatch) =>{
    dispatch(push('/'+selected));
};


export const getGalleryList = (list) =>{
    return {
        type: FetchType.GET_GALLERY_LIST,
        payload: list
    }
};

export const FetchType = {
    GET_GALLERY_LIST: 'GET_GALLERY_LIST'
};

