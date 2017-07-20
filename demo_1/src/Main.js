/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { Component } from 'react'
import List from './Common/List'

class Main extends Component {
  render() {
    let data = [
      {
        title: 'Animated',
        onPress: () => {
          this.props.navigation.navigate('AnimatedUse')
        }
      },
    ]
    return (
      <List
        data={data}
      />
    )
  }
}

export default Main