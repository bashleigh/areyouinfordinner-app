import React from 'react';
import {
	connect,
} from 'react-redux';
import {
	View,
	Text,
} from 'react-native';
import config from './../config';

@connect(
	(state) => state,
)
export default class extends React.Component <{}> {
	componentWillMount = () => {
		console.log('logging out');
		this.props.navigation.dispatch({
			type: config.actions.logout.request,
			navigation: this.props.navigation,
		});
	};

	render = () => (
		<View>
			{this.props.auth.logout.loading ? <Text>Logging out</Text> : null}
		</View>
	);
}