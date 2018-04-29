import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {
  DrawerNavigator,
} from 'react-navigation';
import {
  example,
} from './Components';

class Home extends React.Component {
  static navigationOptions: {
    drawerLabel: 'home',
  };

  render = () => (
    <View>
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
  header: {
    flex: 1,
    backgroundColor: '#FF0000',
    paddingTop: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const App = DrawerNavigator({
  Home: {
    screen: Home,
  },
  example: {
    screen: example,
  },
  //initialRouteName: 'Home',
});

export default () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
    <View style={styles.main}>
      <App/>
    </View>
  </View>
);