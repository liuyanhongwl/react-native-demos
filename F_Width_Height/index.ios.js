/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

class F_Width_Height extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        </View>
        {/*试试去掉父View中的`flex: 1`。 则父View不再具有尺寸，因此子组件也无法再撑开。
        然后再用`height: 300`来代替父View的`flex: 1`试试看？*/}
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('F_Width_Height', () => F_Width_Height);