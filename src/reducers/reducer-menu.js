import {MenuType} from '../actions'
export default function (state=false,action) {
    switch (action.type) {
        case MenuType.OPEN_MENU:
            return {
                active:action.payload
            };
        case MenuType.CLOSE_MENU:
            return {
                active:action.payload
            };
        default:
            return {
                active:state
            };
    }
}