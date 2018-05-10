import React from 'react';
import {
	TextInput,
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default (props) => {
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

			{props.meta.touched &&
			((props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>) ||
			(props.meta.warning && <Text style={styles.warn}>{props.meta.warning}</Text>))}

		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 10,
		margin: 5,
		backgroundColor: '#FFF',
		borderRadius: 5,
	},
	error: {
		color: '#FF0000',
	},
	warn: {
		color: '#FFFF00',
	},
});