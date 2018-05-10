import React from 'react';
import {
	Auth,
	//Group,
	//Responses,
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
	authOptions: {
	},
	app: {
		example: {
			screen: example,
		},
	},
	appOptions: {
		initialRouteName: 'Home',
	},
	switchStack: {
		check: Auth.Pages.Check,
	},
	switchOptions: {
		initialRouteName: 'check',
	},
};
