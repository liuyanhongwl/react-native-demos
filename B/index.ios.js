/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

class A extends Component {
  render() {
    return (
        <Text style={styles.text}>Hello World!</Text>
    );
  }
}

var styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: '#FF2222',
        marginTop: 100,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('B', () => A);
