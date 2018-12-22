import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore,applyMiddleware,compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import allReducers from './reducers';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

const store = createStore(
    allReducers(history),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);
render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);