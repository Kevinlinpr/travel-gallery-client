import { connect } from 'react-redux'
import Content from '../components/Content';
import {setVisibilityContent, VisibilityFilters} from '../actions'
import visibilityContent from '../reducers/visibilityContent'
const getVisibleContent = (content,filter) =>{
    return content;
}
const mapStateToProps = (state) => ({
    filter: getVisibleContent(state.visibilityContent,state.filter)
});

export default connect(
    mapStateToProps,
    null
)(Content)
