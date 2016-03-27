'use strict';

import React, {
  Component,
  WebView,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6EF',
  },
});

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired,
};

export default Web;
