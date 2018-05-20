import React from 'react';
import {
	View,
	Alert,
} from 'react-native';
import {
	connect,
} from 'react-redux';
import {
	Header,
} from './../../../Components';


import QRCodeScanner from 'react-native-qrcode-scanner';

@connect(
	(state) => state,
)
export default class extends React.Component <{}> {
	render = () => (
		<View>
			<Header navigation={this.props.navigation}/>
			<QRCodeScanner
				onRead={this.onSuccess}
			/>
		</View>
	);

	onSuccess = (e) => {
		Alert.alert(e);
	}
}
