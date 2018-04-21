import config from './config';

export default (state = config.state, action = {}) => {
	switch (action.type) {
		default: return state;
	}
}