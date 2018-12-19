import React from 'react';
import SimpleAppBar from './SimpleAppBar';
import VisibleContent from "../containers/VisibleContent";
import {VisibilityFilters} from "../actions";
const App = ({ match: { params } }) => (
    <div>
        <SimpleAppBar/>
        <VisibleContent filter={params.filter || VisibilityFilters.HOME}/>
    </div>
);

export default App;