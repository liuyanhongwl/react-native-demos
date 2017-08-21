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
        {
          this.item('linear', 'configureNext', () => {
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
          this.item('spring', 'configureNext + create', () => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(1000,
                LayoutAnimation.Types.spring,
                LayoutAnimation.Properties.scaleXY)
            )
            this.setState({
              size: this.state.bigTag ? 60 : 100,
              bigTag: !this.state.bigTag,
            })
          })
        }
        {
          this.item('easeInEaseOut', 'configureNext + Presets', () => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            )
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