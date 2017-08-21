/**
 * Created by hong-drmk on 2017/8/21.
 */

import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  LayoutAnimation,
} from 'react-native'

class SimpleLayoutAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 60,
      bigTag: false, //标志位
    }
  }

  item = (title, subtitle, onPress) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title={title} onPress={onPress} />
        <Text>  {subtitle}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'skyblue',
            width: this.state.size,
            height: this.state.size,
            borderRadius: this.state.size / 2.0,
          }} />
        <View style={{ backgroundColor: 'red', width: 100, height:100 }} />
        <View
          style={{
            backgroundColor: 'skyblue',
            width: this.state.size,
            height: this.state.size,
            borderRadius: this.state.size / 2.0,
          }} />
        {
          this.item('linear', 'configureNext', () => {
            //设置动画在下一次render/layout cycle
            //直接使用configureNext方法配置参数
            LayoutAnimation.configureNext({
              duration: 1000,
              create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
              },
              update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
              }
            })
            this.setState({
              size: this.state.bigTag ? 60 : 100,
              bigTag: !this.state.bigTag,
            })
          })
        }
        {
          this.item('easeInEaseOut', 'configureNext + create', () => {
            //使用create方法快捷生成configureNext所需的config参数
            LayoutAnimation.configureNext(
              LayoutAnimation.create(1000,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleXY)
            )
            this.setState({
              size: this.state.bigTag ? 60 : 100,
              bigTag: !this.state.bigTag,
            })
          })
        }
        {
          this.item('spring', 'configureNext + Presets', () => {
            //使用easeInEaseOut、linear、spring方法快捷生成configureNext所需的config参数
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.spring
            )
            this.setState({
              size: this.state.bigTag ? 60 : 100,
              bigTag: !this.state.bigTag,
            })
          })
        }
        {
          this.item('spring', 'spring', () => {
            //直接使用easeInEaseOut、linear、spring方法
            LayoutAnimation.spring()
            this.setState({
              size: this.state.bigTag ? 60 : 100,
              bigTag: !this.state.bigTag,
            })
          })
        }
      </View>
    )
  }
}

export default SimpleLayoutAnimation