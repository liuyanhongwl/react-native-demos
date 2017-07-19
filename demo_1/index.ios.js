/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { MainStack } from './src/App'

export default class demo_1 extends Component {
  render() {
    return (
      <MainStack></MainStack>
    );
  }
}

AppRegistry.registerComponent('demo_1', () => demo_1);
