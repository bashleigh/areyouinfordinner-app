import {
    effects,
} from 'redux-saga';
import config from './config';
import {
    Api,
} from './../../System';

export default function* saga() {
    yield effects.all([

    ]);
}

function* create() {
    while(true) {
        const root = yield effects.take(config.actions.store);

        yield effects.select((state) => state.form.response);

        const response = yield effects.call(Api, {
            ...config.api.store,
            path: config.api.store.path.replace('{group_code}', root.group.code),
            body: params,
        });
    }
}
