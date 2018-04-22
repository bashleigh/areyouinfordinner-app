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
	return createStore(reducers, initialState, compose(applyMiddleware(
		createSagaMiddleware(),
		thunk,
		createReactNavigationReduxMiddleware(
			"root",
			state => state.nav,
		),
	)));
}