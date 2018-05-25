import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	Login as Form,
} from './../Form';
import {
	connect,
} from 'react-redux';
import config from './../config';

@connect(
	state => (state),
)
export default class extends React.Component<{}> {
	static navigationOptions = {
		title: 'Login',
	};

	render = () => (
		<View>
			{(this.props.auth.login.loading) ? <Text>Loading</Text> : null}
			<Form onSubmit={this.onSubmit}/>
			<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
				<Text>Register</Text>
			</TouchableOpacity>
		</View>
	);

	onSubmit = (values) => {
		this.props.navigation.dispatch({
			type: config.actions.login.loginRequest,
			navigation: this.props.navigation,
		});

	}
};