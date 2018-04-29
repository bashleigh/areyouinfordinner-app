import Api from './../../System/Api';

import {
	effects,
} from 'redux-saga';
import config from './config';

export default function* sagas() {
	yield effects.all([
		effects.fork(login),
	]);
}

function* login() {
	while(true) {
		yield effects.take(config.actions.login.loginRequest);

		yield effects.put({
			type: config.actions.login.loading,
			loading: true,
		});

		const params = yield effects.select((state) => state.form.login);

		const response = yield effects.call(Api({
			...config.api.login,
			body: params,
		}));

		console.log('response', response);

		if (response.status === 200) {
			console.log('logged in');
		} else {
			console.log('login not successful');
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
		yield effects.take(config.actions.me.request);

		yield effects.put({
			type: config.actions.me.loading,
			loading: true,
		});

		//TODO stuff to requests login
		//TODO if no jwt then redirect to login
		//TODO else (request me) ? update jwt and me : redirect to login

		yield effects.put({
			type: config.actions.me.loading,
			loading: false,
		});
	}
}

function* register() {
	while(true) {
		yield effects.take(config.actions.register.registerRequest);

		yield effects.put({
			type: config.actions.register.loading,
			loading: true,
		});

		//TODO register request here

		yield effects.put({
			type: config.actions.register.loading,
			loading: false,
		});
	}
}