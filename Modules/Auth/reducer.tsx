import config from './config';

export default (state = config.state, action = {}) => {
	switch (action.type) {

		case config.actions.login.setJWT:
		case config.actions.register.setJWT:
			return {
				...state,
				JWT: action.JWT,
			};
			break;
		case config.actions.login.loading:
			return {
				...state,
				login: {
					...state.login,
					loading: action.loading,
				},
			};
			break;
		case config.actions.register.loading:
			return {
				...state,
				register: {
					...state.login,
					loading: action.loading,
				},
			};
			break;
		case config.actions.me.set:
			return {
				...state,
				me: {
					...state.me,
					data: action.me,
				},
			};
			break
		case config.actions.me.loading:
			return {
				...state,
				me: {
					...state,
					loading: action.loading,
				},
			};
			break;
		case config.actions.register.errors:
			console.log('action', action);
			return {
				...state,
				register: {
					...state.register,
					errors: action.errors,
				},
			};
			break;
		case config.actions.login.errors:
			return {
				...state,
				login: {
					...state.login,
					errors: action,
				},
			};
			break;
		case config.actions.unauth:
			return {
				...state,
				JWT: null,
				me: {
					...state.me,
					data: false,
				},
			};
			break;
		default: return state;
	}
}