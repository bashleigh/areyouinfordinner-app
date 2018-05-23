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
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Show group',
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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('groupQRCode', {
            id: params.id,
          })}>
            <Text>Show QR code</Text>
          </TouchableOpacity>

          {/*TODO list all responses for current day */}

        </View>
      );
    }
}
