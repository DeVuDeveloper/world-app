import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { globalReducer } from './reducers/homepage';

const reducer = combineReducers({
  globalReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;