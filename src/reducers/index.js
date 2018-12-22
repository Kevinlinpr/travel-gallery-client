import {combineReducers} from 'redux';
import NavigationsReducer from './reducer-navigations';
import MenuActiveReducer from './reducer-menu';
import NavigationSelectedReducer from './reducer-navigation-selected';
import {connectRouter} from 'connected-react-router';

const allReducers = (history) => combineReducers({
    navigations:NavigationsReducer,
    menuActive:MenuActiveReducer,
    navigationSelected:NavigationSelectedReducer,
    router:connectRouter(history)
});

export default allReducers;