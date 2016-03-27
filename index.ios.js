'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import Main from './app/components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
