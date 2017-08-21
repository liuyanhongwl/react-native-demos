/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import {
  Animated,
  ScrollView,
  View,
} from 'react-native'

class ScrollEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offsetYAnim: new Animated.Value(0)
    }
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: 'lightgray' }}
        /*
        将事件映射到值
        * */
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.offsetYAnim } } }])}
        scrollEventThrottle={100}
      >
        <Animated.View style={{
          width: '100%', height: 300, backgroundColor: 'skyblue',
          transform: [{ scale: this.state.offsetYAnim.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0.6]
          }) }]
        }} />
        <View style={{ width: '100%', height: 300, backgroundColor: 'red' }} />
        <View style={{ width: '100%', height: 300, backgroundColor: 'green' }} />
        <View style={{ width: '100%', height: 300, backgroundColor: 'orange' }} />
      </ScrollView>
    )
  }
}

export default ScrollEvent