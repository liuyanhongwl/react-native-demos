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
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: 'Leah'},
            {key: 'Yoland'},
            {key: 'Grace'},
            {key: 'Tom'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          horizontal={true}
        />
      </View>
    );
  }
}

class SectionListBasics extends Component {
  render() {
    return (
      <SectionList 
        sections={[
          {key: '1', group: 'D', data: ['Dad', 'Dog', 'Dack']},
          {key: '2', group: 'L', data: ['Laugh', 'Long']}
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.subItem}>{section.group}</Text>}
        ListFooterComponent={() => <View style={styles.footer} />}
        horizontal={true}
      />
    );
  }
}

class ListViewBasics extends Component {
  
  render() {
    var mockData = [
    {
      title: 'FlatList',
      content: '高性能的简单列表组件'
    },
    {
      title: 'SectionList',
      content: '高性能的分组(section)列表组件'
    }
    ];

    return (
      <ListView
        dataSource={
          new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2}).cloneWithRows(mockData)
        }
        renderRow={(data) => {
          return (
            <View>
              <Text>title : {data.title}</Text>
              <Text>content : {data.content}</Text>
            </View>
          );
        }}
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
    padding: 10,
    fontSize: 20,
    color: 'blue',
    height: 44
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
  }
});

// AppRegistry.registerComponent('J_ListView', () => FlatListBasics);
// AppRegistry.registerComponent('J_ListView', () => SectionListBasics);
AppRegistry.registerComponent('J_ListView', () => ListViewBasics);
