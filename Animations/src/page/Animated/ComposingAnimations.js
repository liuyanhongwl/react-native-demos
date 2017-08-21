/**
 * Created by hong-drmk on 2017/8/18.
 */

/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import {
  Animated,
  View,
  Button
} from 'react-native'

class ComposingAnimations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skyAnimValue: new Animated.Value(0),
      redAnimValue: new Animated.Value(0),
      greenAnimValue: new Animated.Value(0),
    }
  }

  cubesRender = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Animated.View style={{
          width: 50,
          height: 50,
          backgroundColor: 'skyblue',
          transform: [
            {
              translateY: this.state.skyAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
              })
            },
          ]
        }} />
        <Animated.View style={{
          width: 50,
          height: 50,
          backgroundColor: 'red',
          transform: [
            {
              translateY: this.state.redAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
              })
            },
          ]
        }} />
        <Animated.View style={{
          width: 50,
          height: 50,
          backgroundColor: 'green',
          transform: [
            {
              translateY: this.state.greenAnimValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
              })
            },
          ]
        }} />
      </View>
    )
  }

  buttonsRender = () => {
    /*
     sequence、parallel、stagger、loop 方法控制的是"动画设置函数"的开始和结束的方式
    * */
    const animations = this.getAnimations()
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Button title="sequence"
                onPress={() => {
                  Animated.sequence(animations).start()
                }} />
        <Button title="parallel"
                onPress={() => {
                  Animated.parallel(animations, {
                    stopTogether: false
                  }).start()
                }} />
        <Button title="stagger"
                onPress={() => {
                  Animated.stagger(250, animations).start()
                }} />
        <Button title="reset"
                onPress={() => {
                  this.reset()
                }} />
      </View>
    )
  }

  getAnimations = () => {
    return [
      Animated.timing(
        this.state.skyAnimValue,
        {
          toValue: 1,
        }),
      Animated.timing(
        this.state.redAnimValue,
        {
          toValue: 1,
        }),
      Animated.timing(
        this.state.greenAnimValue,
        {
          toValue: 1,
        })
    ]
  }

  reset = () => {
    Animated.parallel([
      Animated.timing(
        this.state.skyAnimValue,
        {
          toValue: 0,
        }),
      Animated.timing(
        this.state.redAnimValue,
        {
          toValue: 0,
        }),
      Animated.timing(
        this.state.greenAnimValue,
        {
          toValue: 0,
        })
    ]).start()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.cubesRender()}
        {this.buttonsRender()}
      </View>
    )
  }
}

export default ComposingAnimations