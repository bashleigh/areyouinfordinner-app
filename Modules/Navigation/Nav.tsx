import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default () => (
	<View style={styles.navigation}>
		<Text style={styles.title}>Are you in for dinner</Text>
	</View>
);

const styles = StyleSheet.create({
	navigation: {
		backgroundColor: '#FF0000',
		padding: 10,
		paddingTop: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#FFF',
	}
});
