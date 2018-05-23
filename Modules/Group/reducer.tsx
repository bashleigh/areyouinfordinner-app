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
			const groups = sortGroups(action.groups);
			return {
				...state,
				groups: {
					...state.groups,
					...groups,
				},
			};
			break;
		default:
			return state;
	}
}

const sortGroups = (groups: Array) => {
	const groupObjects = {};
	groups.map((arr) => groupObjects[arr.id] = arr);
	return groupObjects;
};