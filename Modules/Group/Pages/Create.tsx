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

@connect(
    (state) => state,
)
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Create new group',
    };
    render = () => (
        <View>
            <Header navigation={this.props.navigation}/>
            <Text>Create new group</Text>
            <Form handleSubmit={this.onSubmit}/>
        </View>
    );

    onSubmit = () => {
        this.props.navigation.dispatch({
            type: config.actions.group.store,
            navigation: this.props.navigation,
        });
    }
}
