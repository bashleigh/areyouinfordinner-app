import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	connect,
} from 'react-redux';

export default class extends React.Component<{}> {

	static navigationOptions = {
		title: 'Group',
	};

	render = () => (
		<View>
			<Text>Your Groups</Text>
		</View>
	);
}