import {
	Auth,
	Group,
} from './Modules';
import {
	reducer as form,
} from 'redux-form';

export default {
	auth: Auth.reducer,
	form: form,
	group: Group.reducer,
};