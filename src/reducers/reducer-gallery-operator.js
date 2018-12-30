import {GalleryOperatorType} from '../actions'
export default function (state={active:false, operatorObj:{}},action) {
    switch (action.type) {
        case GalleryOperatorType.OPEN_GALLERY_FROM_LOBBY:
            console.log('===search===');
            console.log(action.info);
            return {
                active:action.payload,
                operatorObj:action.info
            };
        case GalleryOperatorType.CLOSE_GALLERY_BACK_TO_LOBBY:
            console.log('===back===');
            console.log(action.info);
            return {
                active:action.payload,
                operatorObj:action.info
            };
        case GalleryOperatorType.UPLOAD_GALLERY_INFO:
            console.log('===upload===');
            console.log(action.info);
            return {
                action:action.payload,
                operatorObj:action.info
            };
        default:
            return state
    }
}