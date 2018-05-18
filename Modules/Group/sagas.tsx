import {
	effects,
} from 'redux-saga';
import Api from './../../System/Api';
import config from './config';

export default function* () {
	yield effects.all([
		effects.fork(paginate),
		effects.fork(create),
		effects.fork(update),
	]);
}

function* paginate() {
	while(true) {
		const root = yield effects.take(config.actions.group.paginate);

		yield effects.put({
			type: config.actions.group.loading,
			loading: true,
		});

		const page = yield effects.select((state) => state.group.page);

		const response = yield effects.call(Api, {
			...config.api.groups.index,
			path: config.api.groups.index.path + '?page=' + page,
		});

		console.log('response', response);

		if (response.status === 200) {
			console.log('Success');

			//TODO add to groups array
		} else {
			//TODO log errors and display
		}

		yield effects.put({
			type: config.actions.group.loading,
			loading: false,
		});
	}
}

function* create() {
	while(true) {
		const root = yield effects.take(config.actions.group.store);

		yield effects.put({
			type: config.actions.group.loading,
			loading: true,
		});

		const params = yield effects.select((state) => state.form.group.values);
		const token = yield effects.select((state) => state.auth.JWT);

		const response = yield effects.call(Api, {
			...config.api.groups.store,
			headers: {
				...config.api.groups.store.headers,
				Authorization: config.api.groups.store.headers.Authorization.replace('{token}', token.access_token),
			},
			body: params,
		});

		if (response.status === 201) {
			yield effects.put({
				type: config.actions.group.push,
				group: response.body,
			});

			root.navigation.navigate('groupShow', {
				id: response.body.id,
			});

		} else if (response.status === 401 || response.status === 403) {
			//TODO unauthenticated response
			yield effects.put({
				type: 'auth-deauth',
			});
		} else {
			//TODO error handling
		}

		yield effects.put({
			type: config.actions.group.loading,
			loading: false,
		});
	}
}

function* update() {
	while(true) {
		const root = yield effects.take(config.actions.group.update);

		yield effects.put({
			type: config.actions.group.loading,
			loading: true,
		});

		const params = yield effects.select((state) => state.form.groups);

		const response = yield effects.call(Api, {
			...config.api.groups.update,
			path: config.api.groups.update.path.replace('{group_code}', params.code),
			body: params,
		});

		if (response.status === 202) {
			//TODO update groups to array
		} else {
			//TODO log errors and display
		}

		yield effects.put({
			type: config.actions.group.loading,
			loading: false,
		});
	}
}

function* destroy() {
	while(true) {
		const root = yield effects.take(config.actions.group.destroy);

		yield effects.put({
			type: config.actions.group.loading,
			loading: true,
		});

		const response = yield effects.call(Api, {
			...config.api.groups.destroy,
			path: config.api.groups.destroy.path.replace('{group_code}', root.code),
		});

		if (response.status === 200) {
			//TODO remove from groups array
		} else {
			//TODO log errors
		}

		yield effects.put({
			type: config.actions.group.loading,
			loading: false,
		});
	}
}

function* show() {
	while(true) {
		const root = yield effects.take(config.actions.group.show);

		yield effects.put({
			type: config.actions.group.loading,
			loading: true,
		});

		const response = yield effects.call(Api, {
			...config.api.groups.show,
			path: config.api.groups.show.path.replace('{group_code}', root.code),
		});

		if (response.status === 200) {
			//TODO update in group
		} else {
			//TODO log errors
		}

		yield effects.put({
			type: config.actions.group.loading,
			loading: false,
		});
	}
}
