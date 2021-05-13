import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, TextInput, View } from 'react-native';
import Main from './components/Main';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Main' component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
