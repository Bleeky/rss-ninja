import { combineReducers } from 'redux';
import authReducer from './modules/Auth/authReducer';
import reederReducer from './modules/Reeder/reducers';

const Reducers = combineReducers({
  auth: authReducer,
  reeder: reederReducer,
});

export default Reducers;
