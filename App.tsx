import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Store,
} from './System';
import {
  Provider,
} from 'react-redux';
import {
  NativeRouter,
  Link,
} from 'react-router-native';
import Routes from './routes';

import {
  Navigation,
} from './Modules';

import reducers from './reducers';
import sagas from './sagas';

const store = Store(reducers, {}, sagas);

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <ScrollView style={styles.scroll}>
              <Navigation/>
              <Routes/>
            </ScrollView>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  scroll: {
    flex: 10,
  },
});
