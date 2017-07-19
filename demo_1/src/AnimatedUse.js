/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { Component } from 'react'
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from  'react-native'

class AnimatedUse extends Component {
  render() {
    let data = [
      {
        title: 'simple',
        navigationScreen: ''
      },
      {title: 'singleValueToMultiStyleProps'},
      {title: 'multiAnimations'},
      {title: 'event'}
    ]
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{height: 44, justifyContent: 'center'}}
            onPress={() => {
              this.props.navigation.navigate(item.navigateScreen)
            }}>
            <Text>{index} {item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={SeparatorComponent}
      />
    )
  }
}

class SeparatorComponent extends React.PureComponent {
  render() {
    return <View style={{ height: 0.5, backgroundColor: 'gray'}} />
  }
}

export default AnimatedUse