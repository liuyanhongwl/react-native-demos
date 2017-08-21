/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import {
  Animated,
  View,
  Button
} from 'react-native'

/*
一个动画值（AnimatedValue、AnimatedValueXY）可以绑定到多个style属性上，
但是只能由一个动画设置函数来设置（timing、spring、decay）
* */
class SingleValueToMultiProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /*
       初始化动画值
       * */
      animValue: new Animated.Value(1),
      currentValue: 1, //标志位
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Animated.View style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'skyblue',
          /*
           将动画值绑定到style的属性
          * */
          opacity: this.state.animValue, //透明度动画
          transform: [ //位置动画（可以思考一下：下面的元素顺序不同会有不同效果）
            {
              translateX: this.state.animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [300, 0] //线性插值，0对应-100，1对应0
              })
            },
            {
              scale: this.state.animValue, //大小动画
            },
          ]
        }} />
        <Button title="touch me"
                onPress={() => {
                  /*
                   处理动画值，并启动动画
                   * */
                  this.state.currentValue = this.state.currentValue == 1 ? 0 : 1
                  Animated.timing(this.state.animValue, {
                      toValue: this.state.currentValue,
                      duration: 1500,
                  }).start()
                }} />
      </View>
    )
  }
}

export default SingleValueToMultiProps