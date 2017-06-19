/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class E_Style extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.blue}>just blue</Text>
        <Text style={[styles.red, styles.blue]}>red, then blue</Text>
        <Text style={[styles.blue, styles.red]}>blue, then red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

AppRegistry.registerComponent('E_Style', () => E_Style);