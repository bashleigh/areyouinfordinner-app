import React from 'react';
import {
	Form,
} from './../../../Components';
import {
	View,
} from 'react-native';
import {
	Field,
	reduxForm,
} from 'redux-form';

const form = () => (
	<View>
		<Field
			name='email'
			placeholder='email@email.com'
			component={Form.Input}
		/>
		<Field
			name='password'
			placeholder='password'
			component={Form.Input}
		/>
	</View>
);

export default reduxForm({
	form: 'login',
})(form);