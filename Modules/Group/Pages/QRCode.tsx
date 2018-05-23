import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';
import {
    Header,
} from './../../../Components';
import QRCode from 'react-native-qrcode';

@connect(
  (state) => state,
)
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'QR Code',
    };

    render = () => {
        const params = this.props.navigation.state.params;

        if (!params.hasOwnProperty('id') || !this.props.group.groups.hasOwnProperty(params.id)) {
            return (
              <View>
                  <Header navigation={this.props.navigation}/>
                  <Text>Group not found!</Text>
              </View>
            );
        }

        const group = this.props.group.groups[params.id];

        return (
          <View>
            <Header navigation={this.props.navigation}/>
            <Text>{group.name}</Text>

            <QRCode
              value={group.code}
              size={200}
              bgColor='red'
              fgColor='white'
            />
          </View>
        );
    }
}
