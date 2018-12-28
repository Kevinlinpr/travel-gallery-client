import {FetchType} from '../actions'
export default function (state={list:[]},action) {
    switch (action.type) {
        case FetchType.GET_GALLERY_LIST:
            return {
                list:action.payload
            };
        default:
            return state
    }
}