import {GalleryOperatorType} from '../actions'
export default function (state={active:false, operatorObj:{}},action) {
    switch (action.type) {
        case GalleryOperatorType.OPEN_GALLERY_FROM_LOBBY:
            return {
                active:action.payload,
                operatorObj:action.info
            };
        case GalleryOperatorType.CLOSE_GALLERY_BACK_TO_LOBBY:
            return {
                active:action.payload,
                operatorObj:action.info
            };
        default:
            return state
    }
}