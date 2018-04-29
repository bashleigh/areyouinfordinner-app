import {
	DrawerNavigator,
	StackNavigator,
	SwitchNavigator,
} from 'react-navigation';

export default(
	authStack: object,
	appDrawer: object,
	authStackOption: object = {},
	appDrawerOptions: object = {}
) => {
	const AuthStack = StackNavigator(authStack, authStackOption);

	const AppDrawer = DrawerNavigator(appDrawer, appDrawerOptions);

	return SwitchNavigator({
		App: AppDrawer,
		Auth: AuthStack,
	}, {
		initialRouteName: 'Auth',
	});
};