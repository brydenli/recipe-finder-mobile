import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';

const Recipe_Detail = ({ navigation, route }) => {
	const [ingredients, setIngredients] = useState([]);
	const [measures, setMeasures] = useState([]);
	const [region, setRegion] = useState('');
	const [instructions, setInstructions] = useState('');
	const [instructionList, setInstructionList] = useState([]);

	useEffect(() => {
		let response = {};
		axios
			.get(
				'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +
					route.params.idMeal
			)
			.then(async (res) => {
				response = res.data.meals[0];
				console.log(response);
				setRegion(response.strArea);
				setInstructions(response.strInstructions);
				setIngredients([
					response.strIngredient1,
					response.strIngredient2,
					response.strIngredient3,
					response.strIngredient4,
					response.strIngredient5,
					response.strIngredient6,
					response.strIngredient7,
					response.strIngredient8,
					response.strIngredient9,
					response.strIngredient10,
					response.strIngredient11,
					response.strIngredient12,
					response.strIngredient13,
					response.strIngredient14,
					response.strIngredient15,
					response.strIngredient16,
					response.strIngredient17,
					response.strIngredient18,
					response.strIngredient19,
					response.strIngredient20,
				]);
				setMeasures([
					response.strMeasure1,
					response.strMeasure2,
					response.strMeasure3,
					response.strMeasure4,
					response.strMeasure5,
					response.strMeasure6,
					response.strMeasure7,
					response.strMeasure8,
					response.strMeasure9,
					response.strMeasure10,
					response.strMeasure11,
					response.strMeasure12,
					response.strMeasure13,
					response.strMeasure14,
					response.strMeasure15,
					response.strMeasure16,
					response.strMeasure17,
					response.strMeasure18,
					response.strMeasure19,
					response.strMeasure20,
				]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useLayoutEffect(() => {
		const ingredientList = ingredients.filter((ingredient) => ingredient != '');
		setIngredients(ingredientList);
		const measuresList = measures.filter((measure) => measure != '');
		setMeasures(measuresList);
	}, []);

	return (
		<View>
			<ScrollView>
				<Text>{route.params.idMeal}</Text>
				<Text>{route.params.strMeal}</Text>
				<Image
					source={{ uri: route.params.strMealThumb }}
					style={{ width: 300, height: 300 }}
				/>
				<View>
					<Text>Ingredient</Text>
					<Text>Amount</Text>
					{ingredients.map((item) => {
						return (
							<View>
								{item ? (
									<View>
										<Text key={ingredients.indexOf(item) + 'ingredient'}>
											{item}
										</Text>
										<Text key={ingredients.indexOf(item) + 'measure'}>
											{measures[ingredients.indexOf(item)]}
										</Text>
									</View>
								) : (
									<View></View>
								)}
							</View>
						);
					})}
					<View>
						<Text>Instructions:</Text>
						<Text>{instructions}</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Recipe_Detail;
