import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router' // react-router v4
class Content extends Component{
    render(){
        return(
            <Switch>
                <Route exact path={"/"} render={()=><h1>Home</h1>}/>
                <Route exact path={"/gallery"} render={()=><h1>Gallery</h1>}/>
                <Route exact path={"/about"} render={()=><h1>about</h1>}/>
                <Route render={() => (<h1>Miss</h1>)} />
            </Switch>
        )
    }
}
function mapStateToProps(state) {
    return{
        navigationSelected: state.navigationSelected
    }
}
export default connect(mapStateToProps)(Content);