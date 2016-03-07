import { createStore, applyMiddleware } from 'redux';
import createMiddleware from './middleware/clientMiddleware';

// create new store { data :: JSON } -> Object
export default function storeBuilder(data) {
  const middleware = [createMiddleware()];
  const store = applyMiddleware(...middleware)(createStore);
  const reducer = require('./modules/reducer');
  return store(reducer, data);
}
