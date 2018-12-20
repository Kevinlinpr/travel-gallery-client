import React,{Component} from 'react';
import {connect} from 'react-redux';

class Content extends Component{
    render(){
        return(
            <div>{this.props.navigationSelected.content}</div>
        )
    }
}
function mapStateToProps(state) {
    return{
        navigationSelected: state.navigationSelected
    }
}
export default connect(mapStateToProps)(Content);