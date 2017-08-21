/**
 * Created by hong-drmk on 2017/8/18.
 */

import React, { Component } from 'react'
import List from '../common/List'

class Main extends Component {
  render() {
    const sections = [
      {
        key: 'Animated',
        data: [
          {
            title: 'Simple',
            onPress: () => {
              this.props.navigation.navigate('Simple')
            }
          },
          {
            title: 'SingleValueToMultiProps',
            onPress: () => {
              this.props.navigation.navigate('SingleValueToMultiProps')
            }
          },
          {
            title: 'ComposingAnimations',
            onPress: () => {
              this.props.navigation.navigate('ComposingAnimations')
            }
          },
          {
            title: 'ScrollEvent',
            onPress: () => {
              this.props.navigation.navigate('ScrollEvent')
            }
          },
          {
            title: 'TouchEvent',
            onPress: () => {
              this.props.navigation.navigate('TouchEvent')
            }
          },
        ],
      },
      {
        key: 'SimpleLayoutAnimation',
        data: [
          {
            title: 'SimpleLayoutAnimation',
            onPress: () => {
              this.props.navigation.navigate('SimpleLayoutAnimation')
            }
          }
        ]
      }
    ]
    return (
      <List
        sections={sections}
      />
    )
  }
}

export default Main