import {combineReducers} from 'redux';
import NavigationsReducer from './reducer-navigations';
import MenuActiveReducer from './reducer-menu';
import {connectRouter} from 'connected-react-router';

const allReducers = (history) => combineReducers({
    navigations:NavigationsReducer,
    menuActive:MenuActiveReducer,
    router:connectRouter(history)
});

export default allReducers;