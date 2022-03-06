import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SettingsAccount from './SettingsAccount';
import SettingsSecurity from './SettingsSecurity';
import HelpCenter from './HelpCenter';

const Settings = () => {
	const currentUser = useSelector((state) => state.auth?.user?.current_user);
	// console.log(currentUser);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<ScrollView style={{ flex: 1 }}>
				<View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
					<View>
						<Text
							style={{
								color: '#090c0d',
								fontSize: 29,
								fontWeight: 'bold',
								paddingTop: 5,
							}}
						>
							{currentUser?.name}
						</Text>
						<Text style={{ color: '#5d616f', fontSize: 14, fontWeight: '500' }}>
							{currentUser?.email}
						</Text>
						<Text style={{ color: '#5d616f', fontSize: 14, fontWeight: '500' }}>
							{currentUser?.role}
						</Text>
					</View>

					{/* <View style={{ paddingTop: 10 }}>
						<SettingsAccount />
					</View> */}

					<View style={{ paddingTop: 15 }}>
						<SettingsSecurity />
					</View>

					<View style={{ paddingTop: 10 }}>
						<HelpCenter />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Settings;
