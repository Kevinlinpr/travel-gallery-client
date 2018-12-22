import React, { Component } from 'react';
import MenuBar from '../containers/container-menu';
import Navigations from '../containers/container-navigations';
import { ConnectedRouter } from 'connected-react-router'
import Content from "../containers/container-content";
class App extends Component{
    render(){
        return(
            <ConnectedRouter history={this.props.history}>
                <div>
                    <MenuBar/>
                    <Navigations/>
                    <Content/>
                </div>
            </ConnectedRouter>
        )
    }
}
export default App;