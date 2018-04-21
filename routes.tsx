import React from 'react';
import {
	example,
} from './Components';
import {
	View,
} from 'react-native';
import {
	Route,
} from 'react-router-native';

export default () => (
	<View>
		<Route exact path='/' component={example}/>
		<Route exact path='/example' component={example}/>
	</View>
);