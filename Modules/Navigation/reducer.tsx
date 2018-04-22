import {
	StackNavigator,
} from 'react-navigation';

export default (AppNavigator: StackNavigator) => {

	const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

	return (state = initialState, action: object = {}) => {
		const nextState = AppNavigator.router.getStateForAction(action, state);

		// Simply return the original `state` if `nextState` is null or undefined.
		return nextState || state;
	};
};