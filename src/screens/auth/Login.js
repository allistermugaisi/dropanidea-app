import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useForm, Controller } from 'react-hook-form';
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Input,
	Button,
	HStack,
	Center,
	Spinner,
	WarningOutlineIcon,
	NativeBaseProvider,
} from 'native-base';
import { fakeLogin } from '../../store/actions/auth-actions';
// import { clearErrors } from '../../store/actions/error-actions';

import TextInputAvoidingView from '../../components/KeyboardAvoidingWrapper';

const Login = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	let error = useSelector((state) => state.error);

	const [showPassword, setShowPassword] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data) => {
		// Attempt to authenticate user
		// setButtonLoading(true);
		await dispatch(fakeLogin());
		// // Hide login screen
		// navigation.navigate('MyIdeaScreen');
	};

	// useEffect(() => {
	// 	// Check for register error
	// 	if (error.id === 'LOGIN_FAIL') {
	// 		setButtonLoading(false);
	// 		Toast.show({
	// 			type: 'error',
	// 			text1: 'Invalid credentials. Please try again!',
	// 			text2: 'Either your email address or password is incorrect.',
	// 		});
	// 		dispatch(clearErrors());
	// 	} else {
	// 		setButtonLoading(false);
	// 	}
	// }, [error]);

	return (
		<NativeBaseProvider>
			<TextInputAvoidingView>
				<Center px="3">
					<Center w="100%">
						<Box safeArea p="2" py="8" w="90%" maxW="290">
							<Heading
								size="lg"
								fontWeight="600"
								color="coolGray.800"
								_dark={{
									color: 'warmGray.50',
								}}
							>
								Welcome
							</Heading>
							<Heading
								mt="1"
								_dark={{
									color: 'warmGray.200',
								}}
								color="coolGray.600"
								fontWeight="medium"
								size="xs"
							>
								Sign in to continue!
							</Heading>

							<VStack space={3} mt="5">
								<FormControl
									isInvalid={errors?.email?.message ? true : false}
									isRequired
								>
									<FormControl.Label>Your email address</FormControl.Label>
									<Controller
										control={control}
										type="email"
										name="email"
										render={({ field: { onChange, value } }) => (
											<Input
												keyboardType="email-address"
												size="lg"
												placeholder="Enter email address"
												value={value}
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

									<FormControl.ErrorMessage
										leftIcon={<WarningOutlineIcon size="xs" />}
									>
										{errors?.email?.message}
									</FormControl.ErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={errors?.password?.message ? true : false}
									isRequired
								>
									<FormControl.Label>Password</FormControl.Label>
									<Controller
										control={control}
										name="password"
										render={({ field: { onChange, value } }) => (
											<Input
												type={showPassword ? 'text' : 'password'}
												size="lg"
												placeholder="Enter password"
												value={value}
												onChangeText={(value) => onChange(value)}
												InputRightElement={
													<Button
														size="xs"
														rounded="none"
														h="full"
														onPress={togglePassword}
													>
														{showPassword ? 'Hide' : 'Show'}
													</Button>
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

									<FormControl.ErrorMessage
										leftIcon={<WarningOutlineIcon size="xs" />}
									>
										{errors?.password?.message}
									</FormControl.ErrorMessage>

									<TouchableOpacity
										style={{ alignSelf: 'flex-end' }}
										onPress={() => navigation.navigate('ForgotPassword')}
									>
										<Text
											style={{
												color: '#f68b1e',
												fontSize: 12,
												marginTop: 5,
												fontWeight: '500',
												textDecorationLine: 'underline',
											}}
										>
											Forgot Password?
										</Text>
									</TouchableOpacity>
								</FormControl>
								<Button
									mt="2"
									colorScheme="green"
									onPress={handleSubmit(onSubmit)}
								>
									{buttonLoading ? (
										<>
											<Spinner
												color="white"
												accessibilityLabel="Loading posts"
											/>
										</>
									) : (
										<Text style={{ color: '#fff', fontSize: 18 }}>Sign in</Text>
									)}
								</Button>
								<HStack mt="6" justifyContent="center">
									<Text
										fontSize="sm"
										color="coolGray.600"
										_dark={{
											color: 'warmGray.200',
										}}
									>
										Don't have an account?{' '}
									</Text>
									<TouchableOpacity
										onPress={() => navigation.navigate('Signup')}
									>
										<Text
											style={{
												color: '#f68b1e',
												fontWeight: '500',
												textDecorationLine: 'underline',
											}}
										>
											Sign Up
										</Text>
									</TouchableOpacity>
								</HStack>
							</VStack>
						</Box>
					</Center>
				</Center>
			</TextInputAvoidingView>
		</NativeBaseProvider>
	);
};

export default Login;
