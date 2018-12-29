import {DestroyerType} from '../actions'
export default function (state=false,action) {
    switch (action.type) {
        case DestroyerType.OPEN_DESTROYER:
            return {
                active:action.payload
            };
        case DestroyerType.CLOSE_DESTROYER:
            return {
                active:action.payload
            };
        default:
            return {
                active:state
            };
    }
}