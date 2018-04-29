import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	Login as Form,
} from './../Form';

export default class extends React.Component<{}> {
	static navigationOptions = {
		title: 'Login',
	};

	render = () => (
		<View>
			<Form />
			<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
				<Text>Register</Text>
			</TouchableOpacity>
		</View>
	);
};