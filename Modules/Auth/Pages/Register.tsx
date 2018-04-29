import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	Regsiter as Form,
} from './../Form';

export default class extends React.Component<{}> {
	static navigationOptions = {
		title: 'Register',
	};

	render = () => (
		<View>
			<Text>Register</Text>
		</View>
	);
};