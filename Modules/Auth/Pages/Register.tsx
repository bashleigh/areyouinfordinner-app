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
			<Text>{this.props.auth.register.loading ? 'loading' : 'not loading'}</Text>
			{this.resolveErrors()}
			<Form handleSubmit={this.onSubmit}/>
		</View>
	);

	onSubmit = (values) => {

		//TODO form validation etc

		this.props.navigation.dispatch({
			type: config.actions.register.registerRequest,
			navigation: this.props.navigation,
		});

	};

	resolveErrors = () => {

		//TODO get errors working
		if (this.props.auth.register.errors.hasOwnProperty('title')) {
			console.log(this.props.auth.register.errors.title);
			return (
				<View>
					<Text>title: {this.props.auth.register.errors.title}</Text>
					{this.props.auth.register.errors.errors.map((errors, i) => {
						Object.values(errors).map((error, i) => (
							<Text key={i}>{error}</Text>
						))
					})}
				</View>
			);
		}
	}
};