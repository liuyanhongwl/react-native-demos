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
} from 'react-native';

export default class I_ScrollView extends Component {
  render() {
    console.log('event.contentOffset');

    return (
      <ScrollView horizontal={false}
      onScroll={
        event => {console.log(event.contentOffset)}
      }>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: 193, height: 110}}/>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Image source={{uri: 'http://ww1.sinaimg.cn/mw690/660d0cdfjw1etlhxise4kj218g0xc0vf.jpg'}} style={{width: 193, height: 110}}/>
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('I_ScrollView', () => I_ScrollView);
