import React from 'react';
import {
	Form,
} from './../../../Components';
import {
	ScrollView,
	TouchableOpacity,
	Text,
} from 'react-native';
import {
	Field,
	reduxForm,
} from 'redux-form';

const emailErrors = [
	Form.Validation.email,
	Form.Validation.required,
];

const passwordErrors = [
	Form.Validation.required,
];

const form = (props) => (
	<ScrollView keyboardShouldPersistTaps={'handled'}>
		<Field
			name='email'
			placeholder='email@email.com'
			component={Form.Input}
			validate={emailErrors}
		/>
		<Field
			name='password'
			placeholder='password'
			secureTextEntry={true}
			component={Form.Input}
			validate={passwordErrors}
		/>
		<TouchableOpacity onPress={props.handleSubmit}>
			<Text>Login</Text>
		</TouchableOpacity>
	</ScrollView>
);

export default reduxForm({
	form: 'login',
})(form);