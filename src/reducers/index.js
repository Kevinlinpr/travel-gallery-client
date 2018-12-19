import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import visibilityContent from './visibilityContent'
export default combineReducers({
    visibilityFilter,
    visibilityContent
})