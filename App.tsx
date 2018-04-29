import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import {
  example,
  Header,
} from './Components';
import {
  Auth,
  Navigation,
} from './Modules';

class Home extends React.Component {
  static navigationOptions: {
    drawerLabel: 'home',
  };

  render = () => (
    <View>
      <Header navigation={this.props.navigation}/>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  main: {
    flex: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const Nav = Navigation(
  {
    Login: {
      screen: Auth.Pages.Login,
    },
    Register: {
      screen: Auth.Pages.Register,
    },
  },
    {
    initialRouteName: 'Login',
  },
    {
      Home: {
        screen: Home,
      },
      example: {
        screen: example,
      },
      initalRouteName: 'Home',
    },
);

export default () => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Nav/>
    </View>
  </View>
);