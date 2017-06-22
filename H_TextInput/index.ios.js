/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  Text,
  View,
} from 'react-native';

export default class H_TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', otherText: ''};
  }

  render() {
    return (
      <View style={{
        padding: 10,
        paddingTop: 20,
        flex: 1,
      }}>
        <Text style={{
          fontStyle: 'italic',
          backgroundColor: 'powderblue',
          flex: 1,
        }}>
          {this.state.text.split(' ').map(word => word && '🍕').join(' ') + '\n\n\n' + this.state.otherText}
        </Text>
        <TextInput style={{
          fontWeight: 'bold',
          backgroundColor: 'skyblue',
          flex: 1,
          textAlignVertical: 'top',
        }}
        multiline={true}
        placeholder='Type here to translate'
        onChangeText={(text) => this.setState({text})}
        onFocus={() => this.setState({otherText: 'focus'})}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('H_TextInput', () => H_TextInput);
