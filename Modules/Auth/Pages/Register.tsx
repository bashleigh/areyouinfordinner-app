import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	Register as Form,
} from './../Form';
import {
	connect,
} from 'react-redux';
import config from './../config';

@connect(
	(state) => state,
)
export default class extends React.Component<{}> {
	static navigationOptions = {
		title: 'Register',
	};

	render = () => (
		<View>
			{(this.props.auth.register.loading) ? <Text>Loading</Text> : null}
			{this.props.auth.register.errors.length >= 1 ? this.props.auth.register.errors.map((error, i) => (
				<Text key={i}>{error}</Text>
			)) : null}
			<Form onSubmit={this.onSubmit}/>
		</View>
	);


	onSubmit = (values) => {
		this.props.navigation.dispatch({
			type: config.actions.register.registerRequest,
			navigation: this.props.navigation,
		});

	};
};