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

const store = Store(reducers);

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.ts to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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
