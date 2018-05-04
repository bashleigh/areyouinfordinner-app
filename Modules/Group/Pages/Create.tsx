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


@connect(
    (state) => state,
)
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Create new group',
    };
    render = () => (
        <View>
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
