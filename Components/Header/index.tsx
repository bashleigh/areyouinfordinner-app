import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

export default class Header extends React.Component<{}> {
	render = () => (
		<View style={styles.header}>
			<TouchableOpacity
				onPress={() => this.props.navigation.navigate('DrawerToggle')}>
				<Text
					style={{color:'#FFF'}}
				>Menu</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#FF0000',
		paddingTop: 40,
	},
});