import React from 'react';
import { View, Text, Image } from 'react-native';

const SettingsAccount = () => {
	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>
				Account
			</Text>
			<View style={{ flexDirection: 'column', paddingTop: 30 }}>
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
						Crypto Limits
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
						Choose Currency
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
						Your Country
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
						Payment Methods
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
						Mobile Numbers
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
						Notifications
					</Text>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/arkhan13/coinbase-clone/master/assets/icons/1x/arrow.jpg',
						}}
						style={{ width: 10, height: 10 }}
					/>
				</View>
			</View>
		</View>
	);
};

export default SettingsAccount;
