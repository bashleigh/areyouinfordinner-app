import React from 'react';
import {
    View,
    Text,
    touchableOpacity,
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

            <TouchableOpacity onPress={() => this.props.navigation.navigate('group-QRcode')}>
                <Text>Show QR code</Text>
            </TouchableOpacity>

            {/*TODO list all responses for current day */}

        </View>
    );
}
