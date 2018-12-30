import {combineReducers} from 'redux';
import NavigationsReducer from './reducer-navigations';
import MenuActiveReducer from './reducer-menu';
import GalleryListReducer from './reducer-gallery-list';
import GalleryDestroyerActiveReducer from './reducer-gallery-destroyer';
import GalleryOperatorReducer from './reducer-gallery-operator';
import {connectRouter} from 'connected-react-router';
const allReducers = (history) => combineReducers({
    navigations:NavigationsReducer,
    menuActive:MenuActiveReducer,
    galleryList:GalleryListReducer,
    galleryDestroyActive:GalleryDestroyerActiveReducer,
    galleryOperator:GalleryOperatorReducer,
    router:connectRouter(history)
});

export default allReducers;