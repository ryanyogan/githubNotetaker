'use strict';

import React, {
  Component,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import Badge from './Badge';
import Separator from './helpers/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#488BEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});

class Profile extends Component {
  getRowTitle(item) {
    item= (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render() {
    const topicArr = [
      'company',
      'location',
      'followers',
      'following',
      'email',
      'bio',
      'public_repos',
    ];

    const list = topicArr.map((item, index) => {
      if (!this.props.userInfo[item]) {
        return (
          <View key={index} />
        );
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.getRowTitle(item)}</Text>
              <Text style={styles.rowContent}>{this.props.userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        );
      }
    });

    return (
      <ScrollView
        style={styles.container}
      >
        <Badge
          userInfo={this.props.userInfo}
        />
        {list}
      </ScrollView>
    );
  }
}

export default Profile;
