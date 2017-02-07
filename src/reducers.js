import { combineReducers } from 'redux';
import authReducer from './modules/Auth/authReducer';
import {
   reederReducer,
   feedsReducer,
   feedReducer,
   bookmarksReducer,
   feedEntryReducer,
} from './modules/Reeder/reducers';

const Reducers = combineReducers({
  auth: authReducer,
  reeder: reederReducer,
  feedsReducer,
  feedReducer,
  bookmarksReducer,
  feedEntryReducer,
});

export default Reducers;
