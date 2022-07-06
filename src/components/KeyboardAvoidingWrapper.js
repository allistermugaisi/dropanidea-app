import React from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';

export default TextInputAvoidingView = ({ children }) => {
	return Platform.OS === 'ios' ? (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	) : (
		<KeyboardAvoidingView style={{ flex: 1 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
