import React from 'react';
import {
	View,
} from 'react-native';
import {
	Route,
} from 'react-router-native';
import {
	Auth,
} from './Modules';

export default () => (
	<View>
		<Route exact path='/login' component={Auth.Pages.Login}/>
		<Route exact path='/register' component={Auth.Pages.Register}/>
		<Route exact path='/' component={Auth.Pages.Login}/>
	</View>
);