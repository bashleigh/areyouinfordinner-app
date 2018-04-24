import * as React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  Store,
} from './System';
import {
  Provider,
  connect,
} from 'react-redux';
import {
  combineReducers,
} from 'redux';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import Routes from './routes';
import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';

import {
  Navigation,
} from './Modules';

import AppReducers from './reducers';
import sagas from './sagas';

const AppNavigator = StackNavigator(Routes);

const navigationReducer = Navigation.reducer(AppNavigator);

console.log('navigation', navigationReducer);

const store = Store(combineReducers({
  ...AppReducers,
  navigationReducer,
}), {}, sagas);

console.log('store', store);

const addListener = createReduxBoundAddListener("root");

const App = () => (
  <AppNavigator navigation={addNavigationHelpers({
    dispatch: this.props.dispatch,
    state: this.props.nav,
    addListener,
  })} />
);

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

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

export default class Root extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Text>Hi</Text>
        <AppWithNavigationState />
      </Provider>
    );
  }
}