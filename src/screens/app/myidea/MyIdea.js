import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
} from 'react-native';

import { logOut } from '../../../store/actions/auth-actions';

const Profile = () => {
	const dispatch = useDispatch();

	const [buttonLoading, setButtonLoading] = useState(false);

	const signOut = async () => {
		await dispatch(logOut());
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'transparent',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<View style={{ backgroundColor: 'white', padding: 20 }}>
				<Text>My Idea</Text>
			</View>
			<TouchableOpacity onPress={signOut} style={style.button}>
				{buttonLoading ? (
					<ActivityIndicator color="#fff" size="small" />
				) : (
					<Text style={{ color: '#fff', fontSize: 18 }}>Sign out</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Profile;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffff7',
	},
	button: {
		width: '80%',
		height: 60,
		padding: 15,
		marginVertical: 15,
		backgroundColor: '#00ab55',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
});
