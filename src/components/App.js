import React, { Component } from 'react';
import MenuBar from '../containers/container-menu';
import Navigations from '../containers/container-navigations';
import Content from '../containers/container-content';
class App extends Component{
    render(){
        return(
            <div>
                <MenuBar/>
                <Navigations/>
                <Content/>
            </div>
        )
    }
}
export default App;