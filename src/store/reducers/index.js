import { combineReducers } from 'redux';
import auth from './auth-reducer';
import idea from './idea-reducer';
import error from './error-reducer';

export default combineReducers({
	auth,
	idea,
	error,
});
