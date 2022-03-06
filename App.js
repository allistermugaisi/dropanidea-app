import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import AppStore from './src/store/Store';
import Toast from 'react-native-toast-message';
import RootStack from './src/stacks/RootStack';

const App = () => {
	return (
		<StoreProvider store={AppStore}>
			<Suspense
				fallback={
					<ActivityIndicator
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						size="large"
					/>
				}
			>
				<RootStack />
				<Toast />
			</Suspense>
		</StoreProvider>
	);
};

export default App;
