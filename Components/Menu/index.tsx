import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions,
} from 'react-native';

export default class extends React.Component<{}> {
render = () => (
		<ScrollView style={styles.menu}>
			<Text style={styles.item}>Test</Text>
		</ScrollView>
	);
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
	menu: {
		backgroundColor: '#404040',
		flex: 1,
		width: window.width,
		height: window.height,
		padding: 20,
	},
	item: {
		color: '#FFF',
	},
});