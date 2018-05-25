import Api from './../../System/Api';
import {
	effects,
} from 'redux-saga';
import config from './config';

export default function* sagas() {
	yield effects.all([
		effects.fork(login),
		effects.fork(register),
		effects.fork(logout),
		effects.fork(unauthenticated),
	]);
}

function* login() {
	while(true) {
		const root = yield effects.take(config.actions.login.loginRequest);

		yield effects.put({
			type: config.actions.login.loading,
			loading: true,
		});

		yield effects.put({
			type: config.actions.login.errors,
			errors: [],
		});

		const params = yield effects.select((state) => state.form.login.values);

		const response = yield effects.call(Api, {
			...config.api.login,
			body: params,
		});

		if (response.status === 201) {
			yield effects.put({
				type: config.actions.login.setJWT,
				JWT: response.body,
			});

			root.navigation.navigate('check');

		} else {

			yield effects.put({
				type: config.actions.login.errors,
				errors: ['Invalid credentials'],
			});
		}

		yield effects.put({
			type: config.actions.login.loading,
			loading: false,
		});
	}
}

function* me() {
	while(true) {
		yield effects.take(config.actions.me.get);

		yield effects.put({
			type: config.actions.me.loading,
			loading: true,
		});

		const params = yield effects.select((state) => state.auth.JWT);

		const response = yield effects.call(Api, {
			...config.api.me,
			headers: {
				...config.api.me.headers,
				'authentication': `Bearer ${params.jwt}`,
			},
		});

		if (response.status === 201) {

			yield effects.put({
				type: config.actions.me.set,
				me: response.body,
			});

		} else {
			yield effects.put({
				type: config.actions.me.unauthenticated,
			});
		}

		yield effects.put({
			type: config.actions.me.loading,
			loading: false,
		});
	}
}

function* register() {
	while(true) {
		const root = yield effects.take(config.actions.register.registerRequest);

		yield effects.put({
			type: config.actions.register.loading,
			loading: true,
		});

		yield effects.put({
			type: config.actions.register.errors,
			errors: [],
		});

		const params = yield effects.select((state) => state.form.register.values);

		const response = yield effects.call(Api, {
			...config.api.register,
			body: params,
		});

		if (response.status === 201) {
			yield effects.put({
				type: config.actions.login.setJWT,
				JWT: response.body.token,
			});

			root.navigation.navigate('check');

		} else {

			const body = yield effects.call([response, 'json']);

			const error = (typeof(body) === 'object') ? body.message.error : 'No errors included in response';

			if (error === 'duplicate entry') error = 'Email address already registered';

			yield effects.put({
				type: config.actions.register.errors,
				errors: [error],
			});
		}

		yield effects.put({
			type: config.actions.register.loading,
			loading: false,
		});
	}
}

//TODO singular function to fire off unauthenticated action
// basically wipe jwt and me
function* unauthenticated() {
	while(true) {
		const root = yield effects.take(config.actions.unauthenticated);

		console.log('deauth fired');

		yield effects.put({
			type: config.actions.unauth,
		});

	//	TODO set global errors
	}
}

function* logout() {
	while(true) {
		const root = yield effects.take(config.actions.logout.request);

		yield effects.put({
			type: config.actions.logout.loading,
			loading: true,
		});

		yield effects.put({
			type: config.actions.unauth,
		});

		root.navigation.navigate('Login');

		yield effects.put({
			type: config.actions.logout.loading,
			loading: false,
		});
	}
}