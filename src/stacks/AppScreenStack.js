import { View, TouchableOpacity } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Badge } from 'react-native-paper';

import {
	Octicons,
	Feather,
	Ionicons,
	AntDesign,
	SimpleLineIcons,
	Fontisto,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

import { MyIdea } from '../screens/app/myidea';
import { Feed } from '../screens/app/recent';
import { Ideas } from '../screens/app/ideas';
// import { ChatScreen } from '../screens/app/ideas/ChatScreen';
import { Profile } from '../screens/app/settings';
import { Notifications } from '../screens/app/global';

const MyIdeaStack = createStackNavigator();
const FeedStack = createStackNavigator();
const IdeasStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const MyIdeaStackScreen = ({ navigation }) => (
	<MyIdeaStack.Navigator>
		<MyIdeaStack.Screen
			name="MyIdeaScreen"
			component={MyIdea}
			options={{
				title: 'Home',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingHorizontal: 15 }}
							onPress={() => navigation.navigate('Notifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<Badge
							visible={true}
							style={{
								marginBottom: 25,
								marginLeft: -20,
								marginRight: 10,
								color: '#fff',
								backgroundColor: 'red',
							}}
							size={15}
						>
							36
						</Badge>
					</View>
				),
			}}
		/>
		<MyIdeaStack.Screen
			name="Notifications"
			component={Notifications}
			options={{
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.navigate('MyIdeaScreen')}>
						<Ionicons
							name="arrow-back"
							size={24}
							color="black"
							style={{ paddingHorizontal: 15 }}
						/>
					</TouchableOpacity>
				),
			}}
		/>
	</MyIdeaStack.Navigator>
);

export const FeedStackScreen = ({ navigation }) => (
	<FeedStack.Navigator>
		<FeedStack.Screen
			name="FeedScreen"
			component={Feed}
			options={{
				title: 'Feed',
				cardStyle: {
					backgroundColor: '#fffff7',
					opacity: 1,
				},
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingHorizontal: 15 }}
							onPress={() => navigation.navigate('FeedNotifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<Badge
							visible={true}
							style={{
								marginBottom: 25,
								marginLeft: -20,
								marginRight: 10,
								color: '#fff',
								backgroundColor: 'red',
							}}
							size={15}
						>
							36
						</Badge>
					</View>
				),
			}}
		/>
		<FeedStack.Screen
			name="FeedNotifications"
			component={Notifications}
			options={{
				title: 'Notifications',
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.navigate('FeedScreen')}>
						<Ionicons
							name="arrow-back"
							size={24}
							color="black"
							style={{ paddingHorizontal: 15 }}
						/>
					</TouchableOpacity>
				),
			}}
		/>
	</FeedStack.Navigator>
);

export const IdeasStackScreen = ({ navigation }) => (
	<IdeasStack.Navigator>
		<IdeasStack.Screen
			name="IdeasScreen"
			component={Ideas}
			options={{
				title: 'Ideas',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingHorizontal: 15 }}
							onPress={() => navigation.navigate('IdeasNotifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<Badge
							visible={true}
							style={{
								marginBottom: 25,
								marginLeft: -20,
								marginRight: 10,
								color: '#fff',
								backgroundColor: 'red',
							}}
							size={15}
						>
							36
						</Badge>
					</View>
				),
			}}
		/>
		{/* <IdeasStack.Screen
			name="ChatScreen"
			component={ChatScreen}
			options={{
				title: 'Chat',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingHorizontal: 15 }}
							onPress={() => navigation.navigate('IdeasNotifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<Badge
							visible={true}
							style={{
								marginBottom: 25,
								marginLeft: -20,
								marginRight: 10,
								color: '#fff',
								backgroundColor: 'red',
							}}
							size={15}
						>
							36
						</Badge>
					</View>
				),
			}}
		/> */}
		<IdeasStack.Screen
			name="IdeasNotifications"
			component={Notifications}
			options={{
				title: 'Notifications',
				headerLeft: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('IdeasScreen')}
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color="black"
								style={{ paddingHorizontal: 15 }}
							/>
						</TouchableOpacity>
					</View>
				),
			}}
		/>
	</IdeasStack.Navigator>
);

export const SettingsStackScreen = ({ navigation }) => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen
			name="SettingsScreen"
			component={Profile}
			options={{
				title: 'Settings',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingHorizontal: 15 }}
							onPress={() => navigation.navigate('SettingsNotifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<Badge
							visible={true}
							style={{
								marginBottom: 25,
								marginLeft: -20,
								marginRight: 10,
								color: '#fff',
								backgroundColor: 'red',
							}}
							size={15}
						>
							36
						</Badge>
					</View>
				),
			}}
		/>
		<SettingsStack.Screen
			name="SettingsNotifications"
			component={Notifications}
			options={{
				title: 'Notifications',
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.navigate('SettingsScreen')}
					>
						<Ionicons
							name="arrow-back"
							size={24}
							color="black"
							style={{ paddingHorizontal: 15 }}
						/>
					</TouchableOpacity>
				),
			}}
		/>
	</SettingsStack.Navigator>
);
