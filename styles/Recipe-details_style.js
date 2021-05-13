import { StyleSheet } from 'react-native';

const recipe_style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF1DD',
		alignItems: 'center',
		justifyContent: 'center',
	},
	recipe_name: {
		marginTop: '15%',
		marginBottom: '2%',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subcontainer1: {
		marginTop: '3%',
		marginBottom: '1%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	header_text: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	table_row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	subcontainer2: {
		marginTop: '7%',
		marginBottom: '10%',
		marginHorizontal: '5%',
	},
	header_text_instructions: {
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: '1%',
	},
});

export default recipe_style;
