import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';
import config from './../config';
import {
    Group as Form,
} from './../Form';
import {
    Header,
} from './../../../Components';

@connect()
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Update group',
    };
    static selectedGroup = 'dunno yet';

    render = () => (
        <View>
            <Header navigation={this.props.navigation}/>
            <Text>Update {selectedGroup} group</Text>
            <Form initialValues={this.props.group.groups[selectedGroup]} handleSubmit={this.onSubmit}/>
        </View>
    );

    onSubmit = () => {
        this.props.navigation.dispatch({
            type: config.actions.group.store,
            navigation: this.props.navigation,
        });
    }
}
