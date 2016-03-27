'use strict';

import React, {
  Component,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#488BEC',
    paddingBottom: 10,
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center',
  },
});

class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.userInfo.avatar_url}}
        />
        <Text style={styles.name}>{this.props.userInfo.name}</Text>
        <Text style={styles.handle}>{this.props.userInfo.login}</Text>
      </View>
    );
  }
}

Badge.propTypes = {
  userInfo: React.PropTypes.shape({
    avatar_url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Badge;
