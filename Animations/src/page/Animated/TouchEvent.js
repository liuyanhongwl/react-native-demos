/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import {
  Animated,
  PanResponder,
  Text,
} from 'react-native'

class TouchEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animValue: new Animated.Value(0)
    }
    this.panRespander = PanResponder.create({
      onStartShouldSetResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([{ nativeEvent: { pageX: this.state.animValue } }])
    })
  }

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: this.state.animValue.interpolate({
            inputRange: [0, 300],
            outputRange: ['#FFFFF0', '#FF0000']
          })
        }}
        {...this.panRespander.panHandlers}>
        <Text style={{ fontSize: 30 }}>横向滑动我</Text>
      </Animated.View>
    )
  }
}

export default TouchEvent