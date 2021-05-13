import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Button,
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native';
import main_styles from '../styles/Main_style';
import axios from 'axios';

const Main = ({ navigation }) => {
	const [ingredient, setIngredient] = useState('');
	const [meals, setMeals] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.get('http://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient)
			.then(async (res) => {
				await setMeals(res.data.meals);
				console.log(meals);
			})
			.catch((err) => console.log(err));
	};

	return (
		<View style={main_styles.container}>
			<ScrollView>
				<View style={main_styles.subcontainer1}>
					<Text>Recipe-Finder</Text>
					<TextInput
						value={ingredient}
						onChangeText={setIngredient}
						placeholder='Input Key Ingredient here'
					/>
					<Button title='submit' onPress={(e) => handleSubmit(e)} />
					<StatusBar style='auto' />
				</View>

				<View style={main_styles.subcontainer2}>
					{meals &&
						meals.map((meal) => {
							return (
								<View key={meal.idMeal}>
									<Text>{meal.strMeal}</Text>
									<TouchableWithoutFeedback
										onPress={() => navigation.navigate('Recipe-Details', meal)}
									>
										<Image
											source={{ uri: meal.strMealThumb }}
											style={{ width: 300, height: 300 }}
										/>
									</TouchableWithoutFeedback>
								</View>
							);
						})}
				</View>
			</ScrollView>
		</View>
	);
};

export default Main;
