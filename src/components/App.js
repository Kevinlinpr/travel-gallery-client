import React from 'react';
import SimpleAppBar from './SimpleAppBar';
import GalleryControlledExpansionPanels from './GalleryControlledExpansionPanels';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';
import TemporaryDrawer from './TemporaryDrawer';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
const App = () => (
    <div>
        <SimpleAppBar/>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/gallery'}>Gallery</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/gallery'} component={GalleryControlledExpansionPanels}/>
                <Route path={'/about'} component={About}/>
            </div>
        </Router>
        <TemporaryDrawer/>
    </div>
);
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default App;