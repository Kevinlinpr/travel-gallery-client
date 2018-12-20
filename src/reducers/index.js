import {combineReducers} from 'redux';
import NavigationsReducer from './reducer-navigations';
import MenuActiveReducer from './reducer-menu';
import NavigationSelectedReducer from './reducer-navigation-selected';
const allReducers = combineReducers({
    navigations:NavigationsReducer,
    menuActive:MenuActiveReducer,
    navigationSelected:NavigationSelectedReducer
});

export default allReducers;