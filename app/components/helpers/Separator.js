'use strict';

import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    marginLeft: 15,
    backgroundColor: '#EAEAEA',
  },
});

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

export default Separator;
