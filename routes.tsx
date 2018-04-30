import React from 'react';
import {
	Auth,
} from './Modules';
import {
	example,
} from './Components';

export default {
	auth: {
		Login: {
			screen: Auth.Pages.Login,
		},
		Register: {
			screen: Auth.Pages.Register,
		},
		initialRouteName: 'Login',
	},
	app: {
		example: {
			screen: example,
		},
		initialRouteName: 'Home',
	},
	switchStack: {
		check: Auth.Pages.Check,
	},
	switchOptions: {
		initialRouteName: 'check',
	},
};