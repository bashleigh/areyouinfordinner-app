import config from './config';

export default (state = config.state, action = {}) => {
	switch(action.type) {
		case config.actions.group.loading:
			return {
				...state,
				loading: action.loading,
			};
			break;
		case config.actions.group.push:
			return {
				...state,
				groups: state.groups[action.group.id] = action.group,
			};
			break;
		default:
			return state;
	}
}