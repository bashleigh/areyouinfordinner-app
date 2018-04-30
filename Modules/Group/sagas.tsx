import {
	effect,
} from 'redux-saga';
import Api from './../../System/Api';

export default function* () {
	yield effects.all([

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