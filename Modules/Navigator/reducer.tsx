export default (AppNavigator) => {
	const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('check'));

	return (state = initialState, action) => {
		const nextState = AppNavigator.router.getStateForAction(action, state);

		// Simply return the original `state` if `nextState` is null or undefined.
		return nextState || state;
	};
};