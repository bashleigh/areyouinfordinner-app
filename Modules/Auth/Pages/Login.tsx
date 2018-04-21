import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import {
	Link,
} from 'react-router-native';
import {
	Login as Form,
} from './../Form';

export default () => (
	<View>
		<Text>Login</Text>
		<Form/>

		<Link to='/register'><Text>Register</Text></Link>
	</View>
);