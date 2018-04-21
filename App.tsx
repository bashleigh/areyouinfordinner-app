import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Store,
} from './System';
import {
  Provider,
} from 'react-redux';
import reducers from './reducers';
import {
  NativeRouter,
  Link,
} from 'react-router-native';
import Routes from './routes';

const store = Store(reducers);

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Link to='/example'><Text>helo</Text></Link>
            <Routes/>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
