import rootReducer from './reducers';
import { createStore } from 'redux';

const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers
);

export default store
