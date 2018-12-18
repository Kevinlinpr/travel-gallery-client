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
}