import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Recipe_Detail from './components/Recipe-details';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Rubik-reg': require('./assets/fonts/Rubik-Regular.ttf'),
		'Rubik-med': require('./assets/fonts/Rubik-Medium.ttf'),
	});
	const Stack = createStackNavigator();

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='Home' component={Main} />
					<Stack.Screen name='Recipe-Details' component={Recipe_Detail} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
