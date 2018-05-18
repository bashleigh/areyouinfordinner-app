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

@connect()
export default class extends React.Component <{}> {
    static navigationOptions = {
        title: 'Show group',
    };
    static selectedGroup = 'dunno yet';

    render = () => {
      console.log('props', this.props);
      return (
        <View>
          <Header navigation={this.props.navigation}/>
          <Text>{this.selectedGroup}</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('groupQRcode')}>
            <Text>Show QR code</Text>
          </TouchableOpacity>

          {/*TODO list all responses for current day */}

        </View>
      );
    }
}
