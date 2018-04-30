import React from 'react';
import {
	ActivityIndicator,
	StatusBar,
	View,
} from 'react-native';
import config from './../config';
import {
	connect,
} from 'react-redux';

@connect(
	(state) => state,
)
export default class extends React.Component<{}> {
	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		this.props.navigation.dispatch({
			type: config.actions.me.get,
		});

		this.props.navigation.navigate(this.props.auth.JWT !== null ? 'App' : 'Auth');
	};

	// Render any loading content that you like here
	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}