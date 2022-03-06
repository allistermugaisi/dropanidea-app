import {
	View,
	Text,
	TouchableOpacity,
	Animated,
	Platform,
	StyleSheet,
	StatusBar,
	Dimensions,
	ActivityIndicator,
	ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, HelperText, useTheme } from 'react-native-paper';
import { registerUser } from '../../store/actions/auth-actions';
import { clearErrors } from '../../store/actions/error-actions';
import { styles } from './styles';

import TextInputAvoidingView from '../../components/KeyboardAvoidingWrapper';

const { width, height } = Dimensions.get('screen');

const Signup = ({ navigation }) => {
	const dispatch = useDispatch();
	let error = useSelector((state) => state.error);

	const [showPassword, setShowPassword] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data) => {
		// Attempt to authenticate user

		setButtonLoading(true);
		await dispatch(registerUser(data));
	};

	useEffect(() => {
		// Check for register error
		if (error.id === 'REGISTER_FAIL') {
			setButtonLoading(false);
			Toast.show({
				type: 'error',
				text1: 'An account with given email already exists!',
				text2: 'Oops, something went wrong',
			});
			dispatch(clearErrors());
		} else {
			setButtonLoading(false);
		}
	}, [error]);

	return (
		<TextInputAvoidingView>
			<ScrollView>
				<Animated.View style={style.container}>
					<LinearGradient
						colors={['#fffff7']}
						style={[styles.centerAlign, { height: height / 7 }]}
					>
						{/* <Image
						source={require('../../../assets/nikiai-logo.png')}
						style={styles.logo}
					/> */}
					</LinearGradient>
					<View
						style={[
							styles.centerAlign,
							{
								marginTop: 0,
								backgroundColor: '#fffff7',
								height: height,
							},
						]}
					>
						<View style={styles.inputSignContainer}>
							<Text
								style={{
									fontSize: 20,
									fontWeight: 'bold',
									textAlign: 'center',
								}}
							>
								REGISTER
							</Text>
							<Controller
								control={control}
								name="name"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										label="Your Name"
										placeholder="Enter your name"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Name is required',
									},
								}}
							/>

							<HelperText type="error" style={styles.helper}>
								{errors?.name?.message}
							</HelperText>
							<Controller
								control={control}
								type="email"
								name="email"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										keyboardType="email-address"
										label="Email address"
										placeholder="Enter your email address"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Email address is required',
									},
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email address',
									},
								}}
							/>
							<HelperText type="error" style={styles.helper}>
								{errors?.email?.message}
							</HelperText>
							<Controller
								control={control}
								name="phone"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										keyboardType="numeric"
										maxLength={10}
										label="Phone Number"
										placeholder="0712345678"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Phone number is required',
									},
									pattern: {
										value: /^(\+254|0)[1-9]\d{8}$/i,
										message: 'Please enter a valid mobile number',
									},
								}}
							/>

							<HelperText type="error" style={styles.helper}>
								{errors?.phone?.message}
							</HelperText>
							<Controller
								control={control}
								name="gender"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										label="Your gender"
										placeholder="Enter your gender"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Gender is required',
									},
								}}
							/>

							<HelperText type="error" style={styles.helper}>
								{errors?.gender?.message}
							</HelperText>
							<Controller
								control={control}
								name="password"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										label="Password"
										secureTextEntry={showPassword ? false : true}
										placeholder="Enter password"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
										right={
											<TextInput.Icon
												onPress={togglePassword}
												name={showPassword ? 'eye-off' : 'eye'}
											/>
										}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Password is required',
									},
									minLength: {
										value: 8,
										message: 'Password should be atleast 8 characters',
									},
								}}
							/>
							<HelperText type="error">{errors?.password?.message}</HelperText>
							<Controller
								control={control}
								name="password_confirmation"
								render={({ field: { onChange, value, onBlur } }) => (
									<TextInput
										mode="outlined"
										label="Confirm Password"
										secureTextEntry={showPassword ? false : true}
										placeholder="Confirm your password"
										value={value}
										theme={{
											colors: {
												primary: '#54A7E2',
												underlineColor: 'transparent',
											},
										}}
										onBlur={onBlur}
										onChangeText={(value) => onChange(value)}
										right={
											<TextInput.Icon
												style={Platform.OS === 'ios' && { paddingTop: 10 }}
												onPress={togglePassword}
												name={showPassword ? 'eye-off' : 'eye'}
											/>
										}
									/>
								)}
								rules={{
									required: {
										value: true,
										message: 'Confirm Password is required',
									},
									validate: (value) =>
										value === getValues('password') || 'Passwords do not match',
								}}
							/>

							<HelperText type="error" style={styles.helper}>
								{errors?.password_confirmation?.message}
							</HelperText>

							<TouchableOpacity
								onPress={handleSubmit(onSubmit)}
								style={style.button}
							>
								{buttonLoading ? (
									<ActivityIndicator color="#fff" size="small" />
								) : (
									<Text style={{ color: '#fff', fontSize: 18 }}>
										Create an account
									</Text>
								)}
							</TouchableOpacity>
						</View>
					</View>
				</Animated.View>
			</ScrollView>
		</TextInputAvoidingView>
	);
};

export default Signup;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffff7',
	},
	button: {
		width: '100%',
		height: 60,
		padding: 15,
		marginVertical: 15,
		backgroundColor: '#54A7E2',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
});
