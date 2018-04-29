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
		effects.take(config.actions.login.loginRequest);

		effects.put({
			type: config.actions.login.loading,
			loading: true,
		});

		//TODO stuff to make login work

		effects.put({
			type: config.actions.login.loading,
			loading: false,
		});
	}
}