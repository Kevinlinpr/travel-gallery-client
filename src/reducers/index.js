import {combineReducers} from 'redux';
import NavigationsReducer from './reducer-navigations';
import MenuActiveReducer from './reducer-menu';
const allReducers = combineReducers({
    navigations:NavigationsReducer,
    menuActive:MenuActiveReducer
});

export default allReducers;