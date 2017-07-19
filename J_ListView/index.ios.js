/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * FlatList
 * SectionList
 * ListView
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  SectionList,
  ListView,
  Text,
  View,
  StyleSheet
} from 'react-native';

class FlatListBasics extends Component {
  render() {
    let mockData = [
            {title: 'Leah'},
            {title: 'Yoland'},
            {title: 'Grace'},
            {title: 'Tom'}
          ]
    for (let i=0; i<10; i++) {
      mockData = [...mockData, ...mockData]
    }
    mockData = mockData.map((v, index) => Object.assign({}, v, {key: index}))

    return (
      <View style={styles.container}>
        <FlatList 
          data={mockData}
          renderItem={({item}) => (
            <View>
              <Text style={[styles.item, {height: 150}]}>{item.key}</Text>
            </View>
          )}
          // numColumns={2}
          // removeClippedSubviews={true}
          // horizontal={true}
          // getItemLayout={(data, index) => {
          //   let v = {length: 200, offset: 200 * index, index}
          //   console.log(v)
          //   return v
          // }}
        />
      </View>
    );
  }
}

class SectionListBasics extends Component {
  render() {
    let mockData = [
          {data: ['Dad', 'Dog', 'Dack']},
          {data: ['Laugh', 'Long']}
        ];
    for (let i=0; i<10; i++) {
      mockData = [...mockData, ...mockData]
    }
    mockData = mockData.map((v, index) => Object.assign({}, v, {key: index, group:index}))
    mockData[1].renderItem = ({item, index}) => (<View style={{backgroundColor: 'cyan', height: 20}}></View>)

    return (
      <SectionList 
        sections={mockData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Text style={[styles.item, {paddingVertical: 50}]}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.subItem}>{section.group}</Text>}
        ListFooterComponent={() => <View style={styles.footer} />}
        // horizontal={true}
        removeClippedSubviews={true}
      />
    );
  }
}

class ListViewBasics extends Component {
  
  render() {
    let mockData = [
      {
        title: 'FlatList',
        content: '高性能的简单列表组件'
      },
      {
        title: 'SectionList',
        content: '高性能的分组(section)列表组件'
      },
      {
        title: 'ListView',
        content: ''
      }
    ];
    for (let i=0; i<100; i++) {
      mockData = mockData.concat(Object.assign({}, mockData[0]))
      mockData = mockData.concat(Object.assign({}, mockData[1]))
      mockData = mockData.concat(Object.assign({}, mockData[2]))
    }
    mockData.forEach((v, index) => {
      v.index = index
      console.log(index)
    })

    return (
      <ListView
        dataSource={
          new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2}).cloneWithRows(mockData)
        }
        renderRow={(data) => {
          return (
            <View style={{paddingVertical: 50}}>
              <Text>{data.index}</Text>
              <Text>title : {data.title}</Text>
              <Text>content : {data.content}</Text>
            </View>
          );
        }}
        // renderSeparator={() => <View style={styles.separator}/>}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'red'
  },
  item: {
    // padding: 10,
    fontSize: 20,
    color: 'blue',
    // height: 44
  },
  subItem: {
    fontSize: 15,
    color: 'yellow',
    height: 30,
    backgroundColor: 'skyblue'
  },
  footer: {
    backgroundColor: 'yellow',
    height: 100,
    width:10,
  },
  separator: {
    backgroundColor: 'black',
    height: 1,
    width: '100%'
  }
});

// AppRegistry.registerComponent('J_ListView', () => FlatListBasics);
AppRegistry.registerComponent('J_ListView', () => SectionListBasics);
// AppRegistry.registerComponent('J_ListView', () => ListViewBasics);
