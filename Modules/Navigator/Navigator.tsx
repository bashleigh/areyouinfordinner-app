import {
	DrawerNavigator,
	StackNavigator,
	SwitchNavigator,
} from 'react-navigation';
import {
	connect,
} from 'react-redux';

export default(
	authStack: object,
	appDrawer: object,
	switchStack: object = {},
	authStackOption: object = {},
	appDrawerOptions: object = {},
	switchStackOptions: object = {}
) => {
	const AuthStack = StackNavigator(authStack, authStackOption);

	const AppDrawer = DrawerNavigator(appDrawer, appDrawerOptions);

	return SwitchNavigator({
		...switchStack,
		App: AppDrawer,
		Auth: AuthStack,
	}, switchStackOptions);
};