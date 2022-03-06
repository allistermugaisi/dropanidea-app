import React, {
	useState,
	useCallback,
	useMemo,
	useRef,
	createRef,
} from 'react';
import {
	Text,
	View,
	Image,
	Button,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ActionSheet from 'react-native-actions-sheet';

import { Create } from '../screens/app/global';
import {
	MyIdeaStackScreen,
	RecentStackScreen,
	IdeasStackScreen,
	SettingsStackScreen,
} from './AppScreenStack';

const Tab = createBottomTabNavigator();
const actionSheetRef = createRef();

const { height } = Dimensions.get('screen');

const sheet_height = height * 0.5;

const AppTabStack = () => {
	return (
		<>
			<ActionSheet
				bounceOnOpen
				gestureEnabled
				indicatorColor="#00ab55"
				overlayColor="#000000"
				defaultOverlayOpacity={0.5}
				bounciness={10}
				ref={actionSheetRef}
			>
				<View style={{ height: sheet_height, padding: '5%' }}>
					<Text>Creeate New Idea</Text>
				</View>
			</ActionSheet>
			<Tab.Navigator
				screenOptions={{
					style: {
						position: 'absolute',
						elevation: 0,
						backgroundColor: 'white',
						borderRadius: 15,
					},
					headerShown: false,
					tabBarShowLabel: false,
					tabBarHideOnKeyboard: true,
					tabBarStyle: [
						{
							display: 'flex',
						},
						null,
					],
				}}
			>
				<Tab.Screen
					name="MyIdea"
					component={MyIdeaStackScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<AntDesign
									name="home"
									size={22}
									color={focused ? '#00ab55' : 'gray'}
								/>
								<Text
									style={{
										color: focused ? '#00ab55' : 'gray',
										fontSize: 10,
									}}
								>
									My Idea
								</Text>
							</View>
						),
					}}
				/>
				<Tab.Screen
					name="Recent"
					component={RecentStackScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<AntDesign
									name="clockcircleo"
									size={20}
									color={focused ? '#54A7E2' : 'gray'}
								/>
								<Text
									style={{
										color: focused ? '#54A7E2' : 'gray',
										fontSize: 10,
									}}
								>
									Recent
								</Text>
							</View>
						),
					}}
				/>

				<Tab.Screen
					name="Create"
					component={Create}
					listeners={{
						tabPress: (e) => {
							e.preventDefault();
							actionSheetRef.current?.setModalVisible();
						},
					}}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<AntDesign name="pluscircle" size={24} color="#54A7E2" />
							</View>
						),
					}}
				/>

				<Tab.Screen
					name="Ideas"
					component={IdeasStackScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<FontAwesome5
									name="user-circle"
									size={20}
									color={focused ? '#54A7E2' : 'gray'}
								/>
								<Text
									style={{
										color: focused ? '#54A7E2' : 'gray',
										fontSize: 10,
									}}
								>
									Ideas
								</Text>
							</View>
						),
					}}
				/>

				<Tab.Screen
					name="Settings"
					component={SettingsStackScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								{/* <Image
									source={{
										uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/settings.png',
									}}
									resizeMode="contain"
									style={{
										width: 17,
										height: 17,
										tintColor: focused ? '#00ab55' : 'gray',
									}}
								/> */}
								<FontAwesome5
									name="user-circle"
									size={20}
									color={focused ? '#54A7E2' : 'gray'}
								/>
								<Text
									style={{
										color: focused ? '#54A7E2' : 'gray',
										fontSize: 10,
									}}
								>
									Profile
								</Text>
							</View>
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
};

export default AppTabStack;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	commandButton: {
		padding: 15,
		borderRadius: 10,
		backgroundColor: '#FF6347',
		alignItems: 'center',
		marginTop: 10,
	},
	panel: {
		padding: 10,
		backgroundColor: '#fff',
		paddingTop: 20,
		shadowOpacity: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		backgroundColor: '#fff',
		paddingTop: 10,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		...Platform.select({
			ios: {
				shadowColor: '#00ab55',
				shadowOpacity: 0.5,
				shadowOffset: {
					width: 0,
					height: -3,
				},
				shadowRadius: 0.001,
			},
			android: {
				elevation: 5,
			},
		}),
	},
	panelHeader: {
		alignItems: 'center',
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#00ab55',
		marginBottom: 10,
	},
	panelTitle: {
		fontSize: 27,
		height: 35,
	},
	panelSubtitle: {
		fontSize: 14,
		color: 'gray',
		height: 30,
		marginBottom: 10,
	},
	panelButton: {
		padding: 13,
		borderRadius: 10,
		backgroundColor: '#FF6347',
		alignItems: 'center',
		marginVertical: 7,
	},
	panelButtonTitle: {
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white',
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a',
	},
});
