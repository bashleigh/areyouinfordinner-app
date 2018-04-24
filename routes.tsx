import React from 'react';
import {
	Auth,
} from './Modules';

export default {
	Login: {
		screen: Auth.Pages.Login,
	},
	Register: {
		screen: Auth.Pages.Register,
	},
	initialRouteName: 'Login',
};