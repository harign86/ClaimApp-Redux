import claimReducer from './claimReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    claim: claimReducer
  });