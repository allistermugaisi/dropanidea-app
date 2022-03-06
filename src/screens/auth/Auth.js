import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from './Login';
import Signup from './Signup';

const Tab = createMaterialTopTabNavigator();

const Auth = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Tab.Navigator
				screenOptions={{
					tabBarIndicatorStyle: { backgroundColor: 'transparent' },
					tabBarScrollEnabled: true,
					tabBarStyle: {
						width: '85%',
						height: '8%',
						marginTop: 10,
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
									Sign in
								</Text>
							</>
						),
					}}
					component={Login}
					name="Login"
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
									Sign up
								</Text>
							</>
						),
					}}
					component={Signup}
					name="Signup"
				/>
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default Auth;
