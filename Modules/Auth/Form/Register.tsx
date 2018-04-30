import React from 'react';
import {
	Form,
} from './../../../Components';
import {
	View,
	TouchableOpacity,
	Text,
} from 'react-native';
import {
	Field,
	reduxForm,
} from 'redux-form';

const form = (props) => (
	<View>
		<Field
			name='email'
			placeholder='email@email.com'
			component={Form.Input}
		/>
		<Field
			name='firstname'
			placeholder='First name'
			component={Form.Input}
		/>
		<Field
			name='lastname'
			placeholder='Last name'
			component={Form.Input}
		/>
		<Field
			name='password'
			placeholder='password'
			secureTextEntry={true}
			component={Form.Input}
		/>
		<Field
			name='passwordConfirm'
			placeholder='password confirmation'
			secureTextEntry={true}
			component={Form.Input}
		/>
		<TouchableOpacity onPress={props.handleSubmit}>
			<Text>Register</Text>
		</TouchableOpacity>
	</View>
);

export default reduxForm({
	form: 'register',
})(form);