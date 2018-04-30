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


	</View>
);

export default reduxForm({
	form: 'register',
})(form);