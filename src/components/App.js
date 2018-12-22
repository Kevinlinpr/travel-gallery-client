import React, { Component } from 'react';
import MenuBar from '../containers/container-menu';
import Navigations from '../containers/container-navigations';
import Content from '../containers/container-content';
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
class App extends Component{
    render(){
        return(
            <ConnectedRouter history={this.props.history}>
                <div>
                    <MenuBar/>
                    <Navigations/>
                    <Switch>
                        <Route exact path={"/"} render={()=><div>Match</div>}/>
                        <Route render={() => (<div>Miss</div>)} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}
export default App;