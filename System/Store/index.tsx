import {
	createStore,
	compose,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {
	routerMiddleware,
} from 'react-router-redux';

export default (reducers: object, initialState: object = {}, sagas: Array = []) => {
	return createStore(reducers, initialState, compose(applyMiddleware(
		createSagaMiddleware(),
		thunk,
		routerMiddleware,
	)));
}