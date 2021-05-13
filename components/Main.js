import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image, ScrollView } from 'react-native';
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
					<Image
						source={{
							uri: 'https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg',
						}}
						width={100}
						height={100}
					/>
				</View>

				<View style={main_styles.subcontainer2}>
					{meals &&
						meals.map((meal) => {
							return (
								<View key={meal.idMeal}>
									<Text>{meal.strMeal}</Text>
									<Image
										source={{ uri: meal.strMealThumb }}
										style={{ width: 300, height: 300 }}
									/>
								</View>
							);
						})}
				</View>
			</ScrollView>
		</View>
	);
};

export default Main;
