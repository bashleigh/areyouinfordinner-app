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

const nameValidation = [
  Form.Validation.required,
  Form.Validation.minLength(2),
];

const form = (props) => (
    <View>
        <Field
            name='name'
            placeholder='Enter a name'
            component={Form.Input}
            validate={nameValidation}
        />
        <TouchableOpacity onPress={props.handleSubmit}>
            <Text>Save</Text>
        </TouchableOpacity>
    </View>
);

export default reduxForm({
    form: 'group',
})(form);
