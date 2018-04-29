import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import Header from './Header';

export default class extends React.Component {
	static navigationOptions: {
		drawerLabel: 'home',
	};

	render = () => (
		<View>
			<Header navigation={this.props.navigation}/>
			<Text>Test</Text>
		</View>
	);
}