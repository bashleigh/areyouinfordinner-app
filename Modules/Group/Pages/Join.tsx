import React from 'react';
import {
	View,
} from 'react-native';
import {
	connect,
} from 'react-redux';
import {
	Header,
} from './../../../Components';

@connect()
export default class extends React.Component <{}> {
	render = () => (
		<View>
			<Header navigation={this.props.navigation}/>
			{/*TODO Add QR scanner*/}
		</View>
	);
}
