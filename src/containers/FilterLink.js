import { connect } from 'react-redux'
import {setVisibilityContent, setVisibilityFilter} from '../actions'
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    filter: ownProps.filter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log(ownProps.filter);
        dispatch(setVisibilityFilter(ownProps.filter));
        dispatch(setVisibilityContent(ownProps.filter));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

