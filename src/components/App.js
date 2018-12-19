import React from 'react';
import SimpleAppBar from './SimpleAppBar';
import VisibleContent from "../containers/VisibleContent";
import {VisibilityFilters} from "../actions";
import ProcessDialog from './ProcessDialog'
const App = ({ match: { params } }) => (
    <div>
        <SimpleAppBar/>
        <VisibleContent filter={params.filter || VisibilityFilters.HOME}/>
        <ProcessDialog/>
    </div>
);

export default App;