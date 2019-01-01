import {UploaderType} from '../actions'
export default function (state={active:false},action) {
    switch (action.type) {
        case UploaderType.OPEN_UPLOADER:
            return {
                active:action.payload
            };
        case UploaderType.CLOSE_UPLOADER:
            return {
                active:action.payload
            };
        default:
            return state
    }
}