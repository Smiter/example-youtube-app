
import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import storeBuilder from './store/createStore';
import {Provider} from 'react-redux';
const store = storeBuilder(window.__REDUX_STATE__);
import App from './containers/App';

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById('app')
);
