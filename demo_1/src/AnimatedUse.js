/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { Component } from 'react'
import List from './Common/List'

class AnimatedUse extends Component {
  render() {
    let data = [
      {
        title: 'Simple',
        onPress: () => {
          this.props.navigation.navigate('Simple')
        }
      },
      {title: 'SingleValueToMultiStyleProps'},
      {title: 'MultiAnimations'},
      {title: 'Event'}
    ]
    return (
      <List
        data={data}
      />
    )
  }
}

export default AnimatedUse