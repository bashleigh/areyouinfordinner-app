import React from 'react';
import {
	TextInput,
	View,
	Text,
	StyleSheet,
} from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
export default function MyTextInput(props) {
	const {
		input,
		...inputProps,
	} = props;

	return (
		<View>
			<TextInput
				{...inputProps}
				onChangeText={input.onChange}
				onBlur={input.onBlur}
				onFocus={input.onFocus}
				value={input.value}
				style={styles.input}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 10,
		margin: 5,
		backgroundColor: '#FFF',
		borderRadius: 5,
	}
});