import { View, Text } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Recent from './Recent';
import Explore from './Explore';
import Popular from './Popular';
import Liked from './Liked';

const Tab = createMaterialTopTabNavigator();

const Feed = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarIndicatorStyle: { backgroundColor: 'transparent' },
				tabBarScrollEnabled: true,
				tabBarStyle: {
					width: '85%',
					height: '8%',
					marginTop: 5,
					borderTopLeftRadius: 5,
					borderTopRightRadius: 5,
					borderBottomLeftRadius: 5,
					borderBottomRightRadius: 5,
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: 20,
					backgroundColor: '#fff',
				},
			}}
		>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<>
							<Text
								style={{
									color: focused ? '#f68b1e' : 'gray',
									fontWeight: 'bold',
								}}
							>
								Recent ideas
							</Text>
						</>
					),
				}}
				component={Recent}
				name="Recent"
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<>
							<Text
								style={{
									color: focused ? '#f68b1e' : 'gray',
									fontWeight: 'bold',
								}}
							>
								Explore ideas
							</Text>
						</>
					),
				}}
				component={Explore}
				name="Explore"
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<>
							<Text
								style={{
									color: focused ? '#f68b1e' : 'gray',
									fontWeight: 'bold',
								}}
							>
								Popular ideas
							</Text>
						</>
					),
				}}
				component={Popular}
				name="Popular"
			/>
			<Tab.Screen
				options={{
					title: ({ color, focused }) => (
						<>
							<Text
								style={{
									color: focused ? '#f68b1e' : 'gray',
									fontWeight: 'bold',
								}}
							>
								Liked ideas
							</Text>
						</>
					),
				}}
				component={Liked}
				name="Liked"
			/>
		</Tab.Navigator>
	);
};

export default Feed;
