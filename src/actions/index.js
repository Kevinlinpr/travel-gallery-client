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
