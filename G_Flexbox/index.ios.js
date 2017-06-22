/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
1. flexDirection  
指定主轴，子元素沿着主轴方向排列
"row" | "column" | "row-reverse" | "column-reverse"

2. justifyContent
指定子元素沿主轴方向的分布
"flex-start" | "flex-end" | "center" | "space-between" | "space-around"

3. alignItems
指定子元素沿次轴方向的排列
"flex-start" | "flex-end" | "center" | "stretch" | "baseline";

4. alignContent
指定子元素沿次轴方向的分布
"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"

5. flexWrap
"wrap" | "nowrap"
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{
        //flexDirection: 'row',
        //flexDirection: 'column',
        flexDirection: 'row-reverse'
        //flexDirection: 'column-reverse',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //justifyContent: 'center',
        //justifyContent: 'flex-end',
        //justifyContent: 'space-around',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        //alignItems: 'flex-start',
        //alignItems: 'center',
        //alignItems: 'flex-end',
        alignItems: 'stretch',
        //alignItems: 'baseline',
      }}>
        {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />*/}

        {/*stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸*/}
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class AlignContentBasics extends Component {
  render() {
    return (
      <View style={{
        //需要把flexWrap: 'wrap'，alignContent才生效
        flexWrap: 'wrap',
        //alignContent: 'flex-start',
        //alignContent: 'center',
        //alignContent: 'flex-end',
        //alignContent: 'space-around',
        //alignContent: 'space-between',
        alignContent: 'stretch',
      }}>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>1</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>2</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>3</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>4</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>5</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>6</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>7</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>8</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>9</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>10</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>11</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>12</Text>
        {/*<Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>13</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>14</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>15</Text>*/}
      </View>
    );
  }
}

class FlexWrapBasics extends Component {
  render() {
    return (  
      <View style={{
        //flexWrap: 'wrap',
        flexWrap: 'nowrap',
      }}>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>1</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>2</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>3</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>4</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>5</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>6</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>7</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>8</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>9</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>10</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>11</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>12</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>13</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>14</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>15</Text>
      </View>
    );
  }
}

class MixtureBasics extends Component {
  render() {
    return (  
      <View style={{
        flexWrap: 'wrap',
        //flexWrap: 'nowrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-end',
      }}>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>1</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>2</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>3</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>4</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>5</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>6</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>7</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>8</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>9</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>10</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>11</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>12</Text>
        <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>13</Text>
        <Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>14</Text>
        <Text style={{width: 150, height: 150, backgroundColor: 'steelblue'}}>15</Text>
      </View>
    );
  }
}

//  AppRegistry.registerComponent('G_Flexbox', () => FlexDirectionBasics);
// AppRegistry.registerComponent('G_Flexbox', () => JustifyContentBasics);
// AppRegistry.registerComponent('G_Flexbox', () => AlignItemsBasics);
// AppRegistry.registerComponent('G_Flexbox', () => AlignContentBasics);
// AppRegistry.registerComponent('G_Flexbox', () => FlexWrapBasics);
AppRegistry.registerComponent('G_Flexbox', () => MixtureBasics);