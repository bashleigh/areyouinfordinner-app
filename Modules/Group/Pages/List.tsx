import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	connect,
} from 'react-redux';

@connect(
	(state) => state,
)
export default class extends React.Component<{}> {

	static navigationOptions = {
		title: 'Group',
	};

	render = () => (
		<View>
			<Text>Your Groups</Text>

			<TouchableOpacity onPress={this.props.navigation.navigate('Group-create')}>
				<Text>Create</Text>
			</TouchableOpacity>

			{this.props.groups.map((group, id) => (
				<View key={group.id}>
					<Text>{group.name}</Text>
					<Text>{group.code}</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Group-show', {
							group: group.id,
						})
					}>
						<Text>Show</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
}
