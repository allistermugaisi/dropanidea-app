import React from 'react';
import { View, Text } from 'react-native';

const Notifications = () => {
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
				<Text>You're all caught up!</Text>
			</View>
		</View>
	);
};

export default Notifications;
