import { combineReducers } from 'redux';
import documentReducer from './documentReducers';

export default combineReducers({
  document: documentReducer
});
