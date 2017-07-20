/**
 * Created by hong-drmk on 2017/7/19.
 */

import React, { Component } from 'react'
import { StackNavigator } from  'react-navigation'
import Main from './Main'
import AnimatedUse from './AnimatedUse'
import Simple from './Animated/Simple'

const MainStack = StackNavigator({
  Main: {
    screen: Main
  },
  AnimatedUse: {
    screen: AnimatedUse
  },
  Simple: {
    screen: Simple
  }
})

export { MainStack }