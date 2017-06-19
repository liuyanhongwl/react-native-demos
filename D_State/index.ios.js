/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class D_State extends Component {
  render() {
    return <View>
      <Blink text='beling beling' />
      <Blink text='hahahahha....' />
      <Blink text='lololololo...' />
    </View>
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText : true };

    // 设置定时器
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState((previousState) => {
        return { showText: !previousState.showText };
      });
    }, 1500);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (<Text>{display}</Text>);
  }
}

AppRegistry.registerComponent('D_State', () => D_State);