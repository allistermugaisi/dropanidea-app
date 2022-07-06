import {
	AUTH_USER,
	USER_LOADING,
	AUTH_ERROR,
	REGISTER_SUCCESS,
	FAKE_LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
	isAuthenticated: null,
	user: null,
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case FAKE_LOGIN:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
			};
		case AUTH_USER:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};
		default:
			return state;
	}
}
