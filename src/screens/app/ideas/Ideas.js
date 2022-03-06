import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
	RefreshControl,
	StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';

import { getAllIdeas } from '../../../store/actions/ideas-actions';

const Ideas = () => {
	const dispatch = useDispatch();
	let getIdeas = useSelector((state) => state.idea);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		dispatch(getAllIdeas());
	}, []);

	const onRefresh = async () => {
		setRefreshing(true);
		dispatch(getAllIdeas());
		setRefreshing(false);
	};

	return (
		<>
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={['#ff00ff']}
					/>
				}
				style={{ backgroundColor: '#fffff7' }}
			>
				{getIdeas?.ideasAll?.length > 0 ? (
					getIdeas?.ideasAll?.map((idea, index) => {
						const {
							_id,
							title,
							description,
							level,
							discussions,
							conceptualist,
							createdAt,
							updatedAt,
						} = idea;
						// console.log(idea);
						return (
							<TouchableOpacity key={_id} style={style.card}>
								<View style={style.innerCard}>
									<Ionicons
										name="chatbubbles-outline"
										size={45}
										color="black"
										style={{ paddingHorizontal: 5 }}
									/>

									<View
										style={{
											paddingLeft: 15,
										}}
									>
										<Text
											style={{
												fontWeight: 'bold',
												marginBottom: 5,
												paddingTop: 15,
											}}
										>
											{title}
										</Text>
										<Text
											numberOfLines={2}
											ellipsizeMode="tail"
											style={style.description}
										>
											{description}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						);
					})
				) : (
					<View
						style={{
							flex: 1,
							backgroundColor: 'transparent',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<View style={{ backgroundColor: 'white', padding: 20 }}>
							<Text>There are no ideas yet</Text>
						</View>
					</View>
				)}
			</ScrollView>
		</>
	);
};

export default Ideas;

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffff7',
		// alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		marginTop: 5,
		height: 80,
		marginHorizontal: 8,
		borderRadius: 5,
		...Platform.select({
			ios: {
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.5,
			},
			android: {
				elevation: -5, // its negative to allow effective box shadow
				position: 'relative',
				borderWidth: 1,
				borderColor: '#f3f3f3',
				zIndex: 50,
			},
		}),
		backgroundColor: '#fff',
	},
	innerCard: {
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%',
	},
	description: {
		flex: 1,
		fontSize: 12,
		color: 'rgb(167, 167, 167)',
		width: '12%',
	},
	button: {
		width: '80%',
		height: 60,
		padding: 15,
		marginVertical: 15,
		backgroundColor: '#54A7E2',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
});
