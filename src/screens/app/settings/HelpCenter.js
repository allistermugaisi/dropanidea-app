import React from 'react';
import { View, Text, Image } from 'react-native';

const HelpCenter = () => {
	return (
		<View>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Help & Support</Text>
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
						Ask a Question
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
						FAQ
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
						Help Center
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
						Contact Us
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
						Terms and Privacy Policy
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
						Licenses
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

export default HelpCenter;
