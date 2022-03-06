import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Popular = () => {
	return (
		<ScrollView style={{ backgroundColor: '#fffff7' }}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'transparent',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View style={{ backgroundColor: 'white', padding: 20 }}>
					<Text>You have no popular ideas</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Popular;
