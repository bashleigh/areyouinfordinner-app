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

const emailValidation = [
	Form.Validation.required,
	Form.Validation.email,
];

const nameValidation = [
	Form.Validation.required,
	Form.Validation.minLength(2),
];

const passwordValidation = [
	Form.Validation.required,
	Form.Validation.minLength(8),
];

const form = (props) => (
	<ScrollView keyboardShouldPersistTaps={'handled'}>
		<Field
			name='email'
			placeholder='email@email.com'
			component={Form.Input}
			validate={emailValidation}
		/>
		<Field
			name='firstname'
			placeholder='First name'
			component={Form.Input}
			validate={nameValidation}
		/>
		<Field
			name='lastname'
			placeholder='Last name'
			component={Form.Input}
			validate={nameValidation}
		/>
		<Field
			name='password'
			placeholder='password'
			secureTextEntry={true}
			component={Form.Input}
			validate={passwordValidation}
		/>
		<Field
			name='passwordConfirm'
			placeholder='password confirmation'
			secureTextEntry={true}
			component={Form.Input}
			validate={[
				Form.Validation.required,
				Form.Validation.minLength(8),
			]}
		/>
		<TouchableOpacity onPress={props.handleSubmit}>
			<Text>Register</Text>
		</TouchableOpacity>
	</ScrollView>
);

export default reduxForm({
	form: 'register',
	validation: (values) => {
		const errors = {};

		if (values.password !== values.passwordConfirm) errors.passwordConfirm = 'Passwords don\'t match';

		return errors;
	},
})(form);