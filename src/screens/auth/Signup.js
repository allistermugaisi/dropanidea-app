import { TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import {
	Box,
	Text,
	Heading,
	VStack,
	FormControl,
	Link,
	Input,
	Button,
	HStack,
	Center,
	Spinner,
	Select,
	CheckIcon,
	WarningOutlineIcon,
	NativeBaseProvider,
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
// import { registerUser } from '../../store/actions/auth-actions';
// import { clearErrors } from '../../store/actions/error-actions';

import TextInputAvoidingView from '../../components/KeyboardAvoidingWrapper';

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
		// setButtonLoading(true);
		// await dispatch(registerUser(data));
		navigation.navigate('Login');
	};

	// useEffect(() => {
	// 	// Check for register error
	// 	if (error.id === 'REGISTER_FAIL') {
	// 		setButtonLoading(false);
	// 		Toast.show({
	// 			type: 'error',
	// 			text1: 'An account with given email already exists!',
	// 			text2: 'Oops, something went wrong',
	// 		});
	// 		dispatch(clearErrors());
	// 	} else {
	// 		setButtonLoading(false);
	// 	}
	// }, [error]);

	return (
		<FlatList
			data={data}
			keyExtractor={(item, index) => `${item}-${index}`}
			style={{ flexGrow: 0 }}
			keyboardShouldPersistTaps="handled"
			contentContainerStyle={{ padding: 5 }}
			showsVerticalScrollIndicator={false}
			renderItem={({ item: data }) => (
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
										We're glad to have you
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
										Sign up to continue!
									</Heading>

									<VStack space={3} mt="5">
										<FormControl
											isInvalid={errors?.name?.message ? true : false}
											isRequired
										>
											<FormControl.Label>Your name</FormControl.Label>
											<Controller
												control={control}
												name="name"
												render={({ field: { onChange, value } }) => (
													<Input
														keyboardType="email-address"
														size="lg"
														placeholder="Enter name"
														value={value}
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

											<FormControl.ErrorMessage
												leftIcon={<WarningOutlineIcon size="xs" />}
											>
												{errors?.name?.message}
											</FormControl.ErrorMessage>
										</FormControl>

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
											isInvalid={errors?.phone?.message ? true : false}
											isRequired
										>
											<FormControl.Label>Your mobile number</FormControl.Label>
											<Controller
												control={control}
												name="phone"
												render={({ field: { onChange, value } }) => (
													<Input
														keyboardType="numeric"
														size="lg"
														placeholder="Enter mobile number"
														value={value}
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

											<FormControl.ErrorMessage
												leftIcon={<WarningOutlineIcon size="xs" />}
											>
												{errors?.phone?.message}
											</FormControl.ErrorMessage>
										</FormControl>

										<FormControl
											isInvalid={errors?.gender?.message ? true : false}
											isRequired
										>
											<FormControl.Label>Choose your gender</FormControl.Label>

											<Controller
												control={control}
												name="gender"
												render={({ field: { onChange, value, onBlur } }) => (
													<Select
														value={value}
														onValueChange={(value) => onChange(value)}
														accessibilityLabel="Choose your Gender"
														placeholder="Choose gender"
														_selectedItem={{
															bg: 'teal.600',
															endIcon: <CheckIcon size={5} />,
														}}
														mt="1"
													>
														<Select.Item label="Male" value="Male" />
														<Select.Item label="Female" value="Female" />
														<Select.Item
															label="Rather not say"
															value="Rather not say"
														/>
													</Select>
												)}
												rules={{
													required: {
														value: true,
														message: 'Please make a selection!',
													},
												}}
											/>
											<FormControl.ErrorMessage
												leftIcon={<WarningOutlineIcon size="xs" />}
											>
												{errors?.gender?.message}
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

											<Link
												href="https://docs.google.com/document/d/1zyycAX15prrhTrIR5H-g3nUVEOUgTvvyQzZwIoHQSSg/edit?usp=sharing"
												_text={{
													fontSize: 'xs',
													fontWeight: '500',
													color: 'orange.500',
												}}
												alignSelf="flex-end"
												mt="1"
											>
												Privacy Policy
											</Link>
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
												<Text style={{ color: '#fff', fontSize: 18 }}>
													Sign up
												</Text>
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
												Already have an account?{' '}
											</Text>
											<TouchableOpacity
												onPress={() => navigation.navigate('Login')}
											>
												<Text
													style={{
														color: '#f68b1e',
														fontWeight: '500',
														textDecorationLine: 'underline',
													}}
												>
													Sign in
												</Text>
											</TouchableOpacity>
										</HStack>
									</VStack>
								</Box>
							</Center>
						</Center>
					</TextInputAvoidingView>
				</NativeBaseProvider>
			)}
		/>
	);
};

export default Signup;

const data = [
	{
		name: 'Dummy Data Signup',
	},
];
