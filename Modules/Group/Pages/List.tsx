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
import config from './../config';

@connect(
	(state) => state,
)
export default class extends React.Component<{}> {

	static navigationOptions = {
		title: 'Group',
	};

	componentWillMount = () => {
		//TODO work out how to request the correct page etc
		// Possibly a condition on the props this.props.groups.pagination.total === null
		this.props.navigation.dispatch({
			type: config.actions.group.paginate,
		});
	};

	render = () => {
		return (
			<View>
				<Header navigation={this.props.navigation}/>
				<Text>Your Groups</Text>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('groupCreate')}>
					<Text>Create</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('groupJoin')}>
					<Text>Join a group</Text>
				</TouchableOpacity>

				{/*TODO pagination*/}

				{(this.props.group.pagination.loading) ? <Text>Loading</Text> : null}
				{Object.keys(this.props.group.groups).map((id) => (
					<View key={id}>
						<Text>{this.props.group.groups[id].name}</Text>
						<Text>{this.props.group.groups[id].code}</Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('groupShow', {
							id: id,
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
