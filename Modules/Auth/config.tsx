export default {
	state: {
		JWT: null,
		me: null,
		register: {
			isLoading: false,
			form: {
				email: null,
				firstname: null,
				lastname: null,
				password: null,
				confirmPassword: null,
			},
		},
		login: {
			isLoading: false,
			form: {
				email: null,
				password: null,
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
	actions: {
		login: {
			loading: 'auth-login-loading',
			loginRequest: 'auth-login-request',
			errors: 'auth-login-errors',
		},
		register: {
			loading: 'auth-register-loading',
			registerRequest: 'auth-register-request',
			errors: 'auth-register-errors',
		},
	},
};