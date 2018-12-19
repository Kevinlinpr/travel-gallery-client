import {VisibilityFilters} from "../actions";
import React from 'react';
const visibilityContent = (state = VisibilityFilters.HOME,action) =>{
    switch (action.type) {
        case 'SET_VISIBILITY_CONTENT':
            return action.filter;
        default:
            return state;
    }
};
export default visibilityContent;