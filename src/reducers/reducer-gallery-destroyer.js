import {DestroyerType} from '../actions'
export default function (state={active:false, deleteObj:{}},action) {
    switch (action.type) {
        case DestroyerType.OPEN_DESTROYER:
            return {
                active:action.payload,
                deleteObj:action.info
            };
        case DestroyerType.CLOSE_DESTROYER:
            return {
                active:action.payload,
                deleteObj:action.info
            };
        default:
            return state
    }
}