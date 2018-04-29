import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Navigator,
  reducer as navReducer,
} from './Modules/Navigator';
import {
  Provider,
  connect,
} from 'react-redux';
import {
  combineReducers,
} from 'redux';
import routes from './routes';
import {
  Store,
} from './System';
import rootReducers from './reducers';
import sagas from './sagas';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import {
  addNavigationHelpers
} from 'react-navigation';

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

const Nav = Navigator(
  routes.auth,
  routes.app
);

const nav = navReducer(Nav);

const reducers = combineReducers({
  nav: nav,
  ...rootReducers,
});

console.log('dev', __DEV__);

const store = Store(reducers, {}, sagas);

const addListener = createReduxBoundAddListener("root");

@connect(
  (state) => ({
    nav: state.nav,
  })
)
class App extends React.Component<{}> {
  render = () => (
    <Nav navigation={addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener,
    })}/>
  );
}

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);