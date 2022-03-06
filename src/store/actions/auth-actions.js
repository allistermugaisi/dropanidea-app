import axios from 'axios';
import Toast from 'react-native-toast-message';
import { save, getValueFor } from '../../utils/secureStore';
import {
	AUTH_USER,
	GET_USERS,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	RESET_PASSWORD_SUCCESS,
} from './types';
import {
	returnErrors,
	clearErrors,
	loginFail,
	authError,
} from './error-actions';

const USERS_AUTH = 'https://zinniaglobalconsultancy.com/api/v1/auth';

// Setup config headers and token
export const tokenConfig = async () => {
	// Get token from secureStore
	const token = await getValueFor('userToken');

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// if token, add to headers
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};

export const auth = () => async (dispatch) => {
	const token = await tokenConfig();
	// console.log(token);

	try {
		const response = await axios.get(`${USERS_AUTH}/profile`, token);
		const data = await response.data;
		// console.log(data);

		await dispatch({
			type: AUTH_USER,
			payload: data,
		});
		dispatch(clearErrors());
	} catch (error) {
		// console.log(error);
		dispatch(
			returnErrors(error.response.data, error.response.status, 'AUTH_ERROR')
		);
		dispatch(authError());
	}
};

// Get users
export const getUsers = () => async (dispatch) => {
	const token = tokenConfig();
	try {
		const response = await axios.get(`${USERS_AUTH}/users`, token);
		const data = await response.data;

		await dispatch({
			type: GET_USERS,
			payload: data,
		});
	} catch (error) {
		dispatch(
			returnErrors(error.response.data, error.response.status, 'GET_USERS_FAIL')
		);
		dispatch(usersError());
	}
};

// Register User
export const registerUser = (payload) => async (dispatch) => {
	const {
		username,
		name,
		company_name,
		email,
		gender,
		role,
		password,
		password_confirmation,
	} = payload;

	try {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// Request body
		const body = JSON.stringify({
			username,
			name,
			company_name,
			email,
			gender,
			role,
			password,
			password_confirmation,
		});

		const response = await axios.post(`${USERS_AUTH}/signup`, body, config);
		const data = await response.data;

		if (data) {
			await dispatch({
				type: REGISTER_SUCCESS,
				payload: data,
			});
			dispatch(auth());
			Toast.show({
				type: 'success',
				text1: 'Account created successfully.',
				text2: `Kindly await your Psychometric Test.`,
			});
		}
		dispatch(clearErrors());
	} catch (error) {
		dispatch(
			returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL')
		);
		dispatch(registerFail());
	}
};

// Login User
export const loginUser = (payload) => async (dispatch) => {
	const { email, password } = payload;

	try {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// Request body
		const body = JSON.stringify({ email, password });

		const response = await axios.post(`${USERS_AUTH}/signin`, body, config);

		const data = await response.data;
		// console.log(data);

		if (data) {
			await dispatch({
				type: LOGIN_SUCCESS,
				payload: data,
			});

			await save('userToken', data.token);
			dispatch(auth());
			Toast.show({
				type: 'success',
				text1: `You're now logged in successfully!`,
			});
		}
		dispatch(clearErrors());
	} catch (error) {
		// console.log(error);
		dispatch(
			returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL')
		);
		dispatch(loginFail());
	}
};

// Logout User
export const logOut = () => async (dispatch) => {
	const clearToken = '';
	await save('userToken', clearToken);
	Toast.show({
		type: 'success',
		text1: `You're now logged out successfully!`,
	});

	dispatch({
		type: LOGOUT_SUCCESS,
	});
};
