import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';

@connect()
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Update group',
    };
    static selectedGroup = 'dunno yet';

    render = () => (
        <View>
            <Text>{selectedGroup}</Text>

            {/*TODO show the QR code */}

        </View>
    );
}
