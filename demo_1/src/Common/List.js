/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { PureComponent, PropTypes } from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import type {Props as FlatListProps} from 'FlatList'

type DataBase = {
  title: string,
  onPress: (info: {
    item: DataBase,
    index: number
  }) => void
}

type OptionalProps = {
  data: Array<DataBase>
}

type Props = OptionalProps & FlatListProps

class List extends PureComponent {
  props: Props

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        data={this.props.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{height: 44, justifyContent: 'center'}}
            onPress={item.onPress}>
            <Text>{index} {item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={SeparatorComponent}
        {...this.props}
      />
    )
  }
}

class SeparatorComponent extends React.PureComponent {
  render() {
    return <View style={{ height: 0.5, backgroundColor: 'gray' }} />
  }
}

export default List