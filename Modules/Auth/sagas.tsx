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

		const params = yield effects.select((state) => state.form.login.values);

		const response = yield effects.call(Api, {
			...config.api.login,
			body: params,
		});

		if (response.status === 201) {
			console.log('logged in');

			yield effects.put({
				type: config.actions.login.setJWT,
				JWT: response.body,
			});

			root.navigation.navigate('check');

		} else {

			yield effects.put({
				type: config.actions.login.errors,
				errors: response.body.message.errors,
			});

			yield effects.put({
				type: config.actions.login.errors,
				errors: response.errors,
			});
		}

		//TODO stuff to make login work

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
			console.log('Valid login credentials ');

			yield effects.put({
				type: config.actions.me.set,
				me: response.body,
			});

		} else {
			console.log('Invalid login credentials');

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
			errors: null,
			title: null,
		});

		const params = yield effects.select((state) => state.form.register.values);

		const response = yield effects.call(Api, {
			...config.api.register,
			body: params,
		});

		console.log('response', response);

		if (response.status === 201) {
			console.log('registered successfully');

			yield effects.put({
				type: config.actions.login.setJWT,
				JWT: response.body.token,
			});

			root.navigation.navigate('check');

		} else {

			yield effects.put({
				type: config.actions.register.errors,
				errors: response.body.message.error,
				title: response.body.message.message,
			});

			console.log('registered failed');
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