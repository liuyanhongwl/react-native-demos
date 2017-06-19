/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class C_Props extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        {/*给系统组件设置属性*/}
        <Image source={pic} style={{width:200, height:100}} />
        {/*给自定义组件设置属性*/}
        <Greeting greetName='Petter' />
        <Greeting greetName='Leah' />
        <Greeting greetName='Tom' />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (<Text>Hello {this.props.greetName}</Text>);
  }
}

AppRegistry.registerComponent('C_Props', () => C_Props);