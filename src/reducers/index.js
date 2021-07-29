import userData from './userData';
import parkingData from './parkingData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userData,
  parkingData,
});

export default rootReducer;
