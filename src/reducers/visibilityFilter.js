import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.HOME, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter