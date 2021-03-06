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

export const openDestroyer = (info) => {
      return {
          type: DestroyerType.OPEN_DESTROYER,
          payload: true,
          info: info
      }
};

export const closeDestroyer = () => {
      return {
          type: DestroyerType.CLOSE_DESTROYER,
          payload: false,
          info: {}
      }
};

export const DestroyerType = {
    OPEN_DESTROYER:'OPEN_DESTROYER',
    CLOSE_DESTROYER:'CLOSE_DESTROYER'
};

export const openUploader = () => {
    return {
        type: UploaderType.OPEN_UPLOADER,
        payload: true
    }
};

export const closeUploader = () => {
    return {
        type: UploaderType.CLOSE_UPLOADER,
        payload: false
    }
};

export const UploaderType = {
    OPEN_UPLOADER:'OPEN_UPLOADER',
    CLOSE_UPLOADER:'CLOSE_UPLOADER'
};

export const openGalleryFromLobby = (info)  => {
    return {
        type: GalleryOperatorType.OPEN_GALLERY_FROM_LOBBY,
        payload: true,
        info: info
    }
};
export const fowardToGalleryRoom = (info) => (dispatch) => {
    dispatch(push('/gallery/'+info._id));
};
export const loadGalleryInfo = (info) => {
    return {
        type: GalleryOperatorType.LOAD_GALLERY_INFO,
        payload: true,
        info: info
    }
};
export const closeGalleryBackToLobby = () => {
    return {
        type: GalleryOperatorType.CLOSE_GALLERY_BACK_TO_LOBBY,
        payload: false,
        info: {}
    }
};
export const backToGalleryLobby = () => (dispatch) => {
    dispatch(push('/gallery'));
};
export const GalleryOperatorType = {
    OPEN_GALLERY_FROM_LOBBY: 'OPEN_GALLERY_FROM_LOBBY',
    CLOSE_GALLERY_BACK_TO_LOBBY: 'CLOSE_GALLERY_BACK_TO_LOBBY',
    LOAD_GALLERY_INFO: 'LOAD_GALLERY_INFO'
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

