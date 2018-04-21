export default {
	state: {
		JWT: null,
		me: null,
		register: {
			isLoading: false,
			form: {
				email: null,
				firrstname: null,
				lastname: null,
				password: null,
				confirmPassword: null,
			},
		},
		login: {
			isLoading: false,
			form: {
				email: null,
			},
		},
	},
	api: {
		login: {
			method: 'post',
			path: '/auth/login',
		},
		register: {
			method: 'post',
			path: '/auth/register',
		},
		me: {
			method: 'get',
			path: '/auth/me',
		},
	},
};