import {
	effect,
} from 'redux-saga';
import Api from './../../System/Api';

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

		const params = yield effects.select((state) => state.form.group);

		const response = yield effects.call(Api, {
			...config.api.groups.store,
		});

		console.log('response', response);

		if (response.status === 201) {
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
			path: config.api.groups.update.path.replace('{group_id}', params.id),
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