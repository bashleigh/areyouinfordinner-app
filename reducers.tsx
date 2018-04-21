import {
	combineReducers,
} from 'redux';
import {
	routerReducer,
} from 'react-router-redux';
import {
	Auth,
} from './Modules';

export default combineReducers({
	routing: routerReducer,
	auth: Auth.reducer,
});