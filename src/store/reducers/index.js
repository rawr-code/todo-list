import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// Reducers
import AuthReducer from './authReducer';
import TodoReducer from './todoReducer';

export default combineReducers({
  firebase: firebaseReducer,
  auth: AuthReducer,
  todos: TodoReducer
});
