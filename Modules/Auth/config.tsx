export default {
	state: {
		JWT: null,
		me: {
			loading: false,
			data: null,
		},
		register: {
			loading: false,
			form: {
				email: null,
				firstname: null,
				lastname: null,
				password: null,
				confirmPassword: null,
			},
			errors: {},
		},
		login: {
			loading: false,
			form: {
				email: null,
				password: null,
			},
			errors: {},
		},
	},
	api: {
		login: {
			method: 'post',
			path: '/auth/login',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
		register: {
			method: 'post',
			path: '/auth/register',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
		me: {
			method: 'get',
			path: '/auth/me',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
	},
	actions: {
		login: {
			loading: 'auth-login-loading',
			loginRequest: 'auth-login-request',
			errors: 'auth-login-errors',
			setJWT: 'auth-login-jwt',
		},
		register: {
			loading: 'auth-register-loading',
			registerRequest: 'auth-register-request',
			errors: 'auth-register-errors',
			setJWT: 'auth-login-jwt',
		},
		me: {
			loading: 'auth-me-loading',
			get: 'auth-me-get',
			set: 'auth-me-set',
			unauthenticated: 'auth-me-unauthenticated',
		},
	},
	unauthenticated: 'auth-deauth',
	unauth: 'auth-unauth',
};