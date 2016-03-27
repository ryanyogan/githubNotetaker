'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

import Profile from './Profile';
import Repositories from './Repositories';

import api from '../utils/api';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

class Dashboard extends Component {
  goToProfile() {
    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      passProps: {userInfo: this.props.userInfo},
    });
  }

  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title: 'Repositories',
          component: Repositories,
          passProps: {
            userInfo: this.props.userInfo,
            repos: res,
          },
        });
      });
  }

  goToNotes(event) {

  }

  makeBackground(btn) {
    let obj = {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  render() {

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.userInfo.avatar_url}}
        />
        <TouchableHighlight
          onPress={this.goToProfile.bind(this)}
          style={this.makeBackground(0)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepos.bind(this)}
          style={this.makeBackground(1)}
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes.bind(this)}
          style={this.makeBackground()}
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Dashboard;
