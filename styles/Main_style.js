import { StyleSheet } from 'react-native';

const main_styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffaa2a',
		alignItems: 'center',
		justifyContent: 'center',
	},
	subcontainer1: {
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: '5%',
	},
	subcontainer2: {
		flex: 1,
		textAlign: 'center',
		justifyContent: 'center',
	},
	title_text: {
		marginTop: '35%',
		marginBottom: '1%',
		fontSize: 40,
		textAlign: 'center',
		fontFamily: 'Rubik-med',
		color: 'white',
	},
	input_text: {
		marginTop: '2%',
		textAlign: 'center',
		alignSelf: 'center',
		backgroundColor: 'white',
		width: '100%',
	},
	button: {
		textAlign: 'center',
		alignSelf: 'center',
	},
	meal_name: {
		fontSize: 16,
		textAlign: 'center',
		fontFamily: 'Rubik-reg',
	},
	meal_container: {
		marginBottom: '5%',
	},
});

export default main_styles;
