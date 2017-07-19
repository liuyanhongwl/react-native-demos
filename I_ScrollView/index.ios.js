/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  TextInput,
  Text,
  Image,
  View,
} from 'react-native';

export default class I_ScrollView extends Component {
  render() {
    console.log('event.contentOffset');

    let views = []
    for (let i=0; i<100; i++){
      views.push(i)
    }

    views = views.map((value, index) => {
      return (
        <View key={index}>
          <Text style={{fontSize:20}}>Scroll me plz------{value}</Text>
          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: 193, height: 110}}/>
          <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        </View>

      )
    })

    return (
      <ScrollView
        horizontal={false}
        ={true}
        onScroll={
          event => {
            console.log(event.nativeEvent.contentOffset.y)
          }
        }>
        {views}
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('I_ScrollView', () => I_ScrollView);