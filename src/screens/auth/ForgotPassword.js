import React from 'react';
import {
	Input,
	Text,
	Button,
	VStack,
	Heading,
	Center,
	NativeBaseProvider,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInputAvoidingView from '../../components/KeyboardAvoidingWrapper';

const ForgotPassword = () => {
	const navigation = useNavigation();

	return (
		<TextInputAvoidingView>
			<Center>
				<VStack flex="1" justifyContent="flex-end" w="100%" maxW="300">
					<Heading mb="3">Forgot Password</Heading>
					<Text color="muted.400">
						Don't worry! Enter your email address associated with your account
						and we’ll send a link to reset your password.
					</Text>
					<Input
						placeholder="Enter your email address"
						mt="10"
						mb="4"
						size="lg"
					/>
					<Button mb="4" colorScheme="green">
						Proceed
					</Button>
					<TouchableOpacity
						style={{ alignSelf: 'center' }}
						onPress={() => navigation.navigate('Login')}
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
							Back to Login
						</Text>
					</TouchableOpacity>
				</VStack>
			</Center>
		</TextInputAvoidingView>
	);
};

export default () => {
	return (
		<NativeBaseProvider>
			<Center flex={0.7} px="3">
				<ForgotPassword />
			</Center>
		</NativeBaseProvider>
	);
};
