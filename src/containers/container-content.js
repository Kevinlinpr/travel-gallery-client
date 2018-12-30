import React,{Component} from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import Home from '../components/Home';
import About from '../components/About';
import GalleryManager from "./container-gallery-manager";

class Content extends Component{
    render(){

        return(
            <Switch>
                <Route exact path={"/"} render={()=><Home/>}/>
                <Route path={"/gallery"} render={()=><GalleryManager/>}/>
                <Route path={"/about"} render={()=><About/>}/>
                <Route render={() => (<h1>Miss</h1>)} />
            </Switch>
        )
    }
}

export default Content;