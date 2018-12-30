import React,{Component} from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import Home from '../components/Home';
import About from '../components/About';
import GalleryRoom from "./container-gallery-room";
import GalleryLobby from "../components/GalleryLobby";

class Content extends Component{
    render(){

        return(
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/gallery/:id"} component={GalleryRoom}/>
                <Route path={"/gallery"} component={GalleryLobby}/>
                <Route path={"/about"} component={About}/>
                <Route render={() => (<h1>Miss</h1>)} />
            </Switch>
        )
    }
}

export default Content;