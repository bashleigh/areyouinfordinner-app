import {
	createStore,
	compose,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

export default (reducers: object, initialState: object = {}, sagas: Array = []) => {

	const reduxSagaMiddleware = createSagaMiddleware();

	const store = createStore(reducers, initialState, compose(applyMiddleware(
		reduxSagaMiddleware,
		thunk,
		createReactNavigationReduxMiddleware(
			"root",
			state => state.nav,
		),
	)));

	sagas.forEach((saga) => {
		reduxSagaMiddleware.run(saga);
	});

	return store;
}