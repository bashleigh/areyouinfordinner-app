import {
	combineReducers,
} from 'redux';
import {
	Auth,
} from './Modules';

export default combineReducers({
	auth: Auth.reducer,
});