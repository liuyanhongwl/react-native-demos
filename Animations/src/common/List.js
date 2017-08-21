/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { PureComponent, PropTypes } from 'react'
import {
  SectionList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import type { Props as FlatListProps } from 'FlatList'

type DataBase = {
  title: string,
  onPress: (info: {
    item: DataBase,
    index: number
  }) => void
}

type RequiredProps = {
  sections: Array
}

type Props = RequiredProps & FlatListProps

class List extends PureComponent {
  props: Props

  render() {
    return (
      <SectionList
        keyExtractor={(item, index) => index}
        sections={this.props.sections}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ height: 44, justifyContent: 'center', padding: 10 }}
            onPress={item.onPress}>
            <Text>{index} {item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'black', padding: 10 }}>
            <Text style={{ color: 'white' }}>{section.key}</Text>
          </View>
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