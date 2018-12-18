import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link';
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log(ownProps.filter);
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Link)

