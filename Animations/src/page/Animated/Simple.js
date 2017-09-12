/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import {
  Animated,
  View,
  Button,
} from 'react-native'

class Simple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /*
       1. 初始化动画值
       * */
      fadeAnim: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text style={{
          /*
           2. 将动画值绑定到style的属性
           * */
          opacity: this.state.fadeAnim
        }}>
          Simple Animated Used Animated.timing
        </Animated.Text>
        <Button title="touch me"
                onPress={() => {
                  /*
                   3. 处理动画值，并启动动画
                   * */
                  Animated.timing(
                    this.state.fadeAnim,
                    {
                      duration: 1000,
                      toValue: 1
                    }
                  ).start()
                }} />
      </View>
    )
  }
}

export default Simple