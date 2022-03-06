import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

import { logOut } from '../../../store/actions/auth-actions';

const SettingsSecurity = () => {
	const [face, setFace] = useState(false);
	const [privacy, setPrivacy] = useState(false);

	const dispatch = useDispatch();

	const [buttonLoading, setButtonLoading] = useState(false);

	const signOut = async () => {
		await dispatch(logOut());
	};

	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Security</Text>
			<View style={{ paddingTop: 30, flexDirection: 'column' }}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: 40,
					}}
				>
					<Text
						style={{
							flexWrap: 'wrap',
							fontSize: 17,
							letterSpacing: 0.5,
							fontWeight: '300',
						}}
					>
						Require PIN / Face ID
					</Text>
					<ToggleSwitch
						isOn={face}
						onColor="#00ab55"
						offColor="#ddd"
						size="medium"
						onToggle={(isOn) => {
							if (!face) {
								setFace(true);
							} else {
								setFace(false);
							}
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: 40,
					}}
				>
					<Text
						style={{
							fontSize: 17,
							fontWeight: '300',
							letterSpacing: 0.5,
							color: !face ? '#ddd' : 'black',
						}}
					>
						PIN / Face ID Settings
					</Text>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/arrow.jpg',
						}}
						style={{ width: 10, height: 10 }}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: 40,
					}}
				>
					<Text
						style={{
							flexWrap: 'wrap',
							fontSize: 17,
							letterSpacing: 0.5,
							fontWeight: '300',
						}}
					>
						Activate Privacy Mode
					</Text>
					<ToggleSwitch
						isOn={privacy}
						onColor="#00ab55"
						offColor="#ddd"
						size="medium"
						onToggle={(isOn) => {
							if (!privacy) {
								setPrivacy(true);
							} else {
								setPrivacy(false);
							}
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 17,
							fontWeight: '300',
							letterSpacing: 0.5,
							marginBottom: 30,
						}}
					>
						Change Password
					</Text>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/arrow.jpg',
						}}
						style={{ width: 10, height: 10 }}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 17,
							fontWeight: '300',
							letterSpacing: 0.5,
							marginBottom: 30,
						}}
					>
						Devices
					</Text>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/arrow.jpg',
						}}
						style={{ width: 10, height: 10 }}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 17,
							fontWeight: '300',
							letterSpacing: 0.5,
							marginBottom: 30,
						}}
					>
						Account Activity
					</Text>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/arrow.jpg',
						}}
						style={{ width: 10, height: 10 }}
					/>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity onPress={signOut} style={styles.button}>
						{buttonLoading ? (
							<ActivityIndicator color="#fff" size="small" />
						) : (
							<Text style={{ color: '#fff', fontSize: 18 }}>Logout</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appButtonContainer: {
		width: '100%',
		borderWidth: 0.5,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingVertical: 17,
		paddingHorizontal: 100,
	},
	appButtonText: {
		fontSize: 16,
		color: 'red',
		fontWeight: '600',
		alignSelf: 'center',
	},
	button: {
		width: '80%',
		height: 60,
		padding: 15,
		marginVertical: 15,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
});

export default SettingsSecurity;
