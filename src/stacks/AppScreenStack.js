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
import { Recent } from '../screens/app/recent';
import { Ideas } from '../screens/app/ideas';
import { Profile } from '../screens/app/settings';
import { Notifications } from '../screens/app/global';

const MyIdeaStack = createStackNavigator();
const RecentStack = createStackNavigator();
const IdeasStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const MyIdeaStackScreen = ({ navigation }) => (
	<MyIdeaStack.Navigator>
		<MyIdeaStack.Screen
			name="MyIdeaScreen"
			component={MyIdea}
			options={{
				title: 'MyIdea',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Notifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Fontisto
								name="more-v-a"
								size={20}
								color="black"
								style={{ paddingHorizontal: 15 }}
							/>
						</TouchableOpacity>
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

export const RecentStackScreen = ({ navigation }) => (
	<RecentStack.Navigator>
		<RecentStack.Screen
			name="RecentScreen"
			component={Recent}
			options={{
				title: 'Recent',
				headerRight: () => (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Notifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Fontisto
								name="more-v-a"
								size={20}
								color="black"
								style={{ paddingHorizontal: 15 }}
							/>
						</TouchableOpacity>
					</View>
				),
			}}
		/>
		<RecentStack.Screen
			name="Notifications"
			component={Notifications}
			options={{
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.navigate('RecentScreen')}>
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
	</RecentStack.Navigator>
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
							onPress={() => navigation.navigate('Notifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Fontisto
								name="more-v-a"
								size={20}
								color="black"
								style={{ paddingHorizontal: 15 }}
							/>
						</TouchableOpacity>
					</View>
				),
			}}
		/>
		<IdeasStack.Screen
			name="Notifications"
			component={Notifications}
			options={{
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.navigate('IdeasScreen')}>
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
							onPress={() => navigation.navigate('Notifications')}
						>
							<SimpleLineIcons name="bell" size={20} color="black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Fontisto
								name="more-v-a"
								size={20}
								color="black"
								style={{ paddingHorizontal: 15 }}
							/>
						</TouchableOpacity>
					</View>
				),
			}}
		/>
		<SettingsStack.Screen
			name="Notifications"
			component={Notifications}
			options={{
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
