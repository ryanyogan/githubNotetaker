'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';

import Badge from './Badge';
import Separator from './helpers/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  name: {
    color: '#488BEC',
    fontSize: 10,
    paddingBottom: 5,
  },
  stars: {
    color: '#488BEC',
    fontSize: 16,
    paddingBottom: 5,
  },
  description: {
    fontSize: 16,
    paddingBottom: 5,
  },
});

class Repositories extends Component {
  openPage(url) {
    console.log('the url is: ', url);
  }

  render() {
    const repos = this.props.repos.map((repo, index) => {
      const desc = repo.description ?
        <Text style={styles.description}>{repo.description}</Text> :
        <View />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repo.html_url)}
              underlayColor='transparent'
            >
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text
              style={styles.name}
            >
              {repo.stargazers_count}
            </Text>
            {desc}
          </View>
          <Separator />
        </View>
      );
    });

    return (
      <ScrollView
        style={styles.container}
      >
        <Badge userInfo={this.props.userInfo} />
        {repos}
      </ScrollView>
    );
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
};

export default Repositories;
