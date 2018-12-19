import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import Root from "./components/Root";
const store = createStore(rootReducer);
render(
    <Root store={store}/>,
    document.getElementById('root')
);