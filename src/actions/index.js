export const setVisibilityContent = (filter) => {
    return{
        type: 'SET_VISIBILITY_CONTENT',
        filter
    }
};
export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};
export const VisibilityFilters = {
    HOME: 'HOME',
    GALLERY: 'GALLERY',
    ABOUT: 'ABOUT'
};