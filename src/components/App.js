import React, { Component } from 'react';
import MenuBar from '../containers/container-menu';
import Navigations from '../containers/container-navigations';
class App extends Component{
    render(){
        return(
            <div>
                <MenuBar/>
                <Navigations/>
            </div>
        )
    }
}
export default App;