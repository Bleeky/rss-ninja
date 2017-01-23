import { combineReducers } from 'redux';
import exampleReducer from './modules/Example/reducers';

const Reducers = combineReducers({
  example: exampleReducer,
});

export default Reducers;
