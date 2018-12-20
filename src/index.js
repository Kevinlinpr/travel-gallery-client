import React from 'react'
import { render } from 'react-dom'
import App from './components/App';
import { createStore } from 'redux'
import allReducers from './reducers';
import {Provider} from 'react-redux'
const store = createStore(allReducers);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);