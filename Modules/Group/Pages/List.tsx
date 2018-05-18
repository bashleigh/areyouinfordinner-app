import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	connect,
} from 'react-redux';
import {
	Header,
} from './../../../Components';


@connect(
	(state) => state,
)
export default class extends React.Component<{}> {

	static navigationOptions = {
		title: 'Group',
	};

	render = () => {
		console.log('state', this.props);
		return (
			<View>
				<Header navigation={this.props.navigation}/>
				<Text>Your Groups</Text>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('groupCreate')}>
					<Text>Create</Text>
				</TouchableOpacity>

				{/*TODO pagination*/}
				{Object.keys(this.props.group.groups).map((id) => (
					<View key={id}>
						<Text>{this.props.group.groups[id].name}</Text>
						<Text>{group.code}</Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('groupShow', {
							group: this.props.group.groups[id].id,
						})
						}>
							<Text>Show</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
		);
	};
}
