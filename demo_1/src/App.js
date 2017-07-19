/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { Component } from 'react'
import { StackNavigator } from  'react-navigation'
import Main from './Main'
import AnimatedUse from './AnimatedUse'

const MainStack = StackNavigator({
  Main: {
    screen: Main
  },
  AnimatedUse: {
    screen: AnimatedUse
  }
})

export { MainStack }