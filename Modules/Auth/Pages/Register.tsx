import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	Link,
} from 'react-router-native';

export default () => (
	<View>
		<Text>Register</Text>
		<Link to='/login'><Text>Login</Text></Link>
	</View>
);