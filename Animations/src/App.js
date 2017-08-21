/**
 * Created by hong-drmk on 2017/8/18.
 */

import React from 'react'
import { StackNavigator } from  'react-navigation'
import Main from './page/Main'
import Simple from './page/Animated/Simple'
import SingleValueToMultiProps from './page/Animated/SingleValueToMultiProps'
import ComposingAnimations from './page/Animated/ComposingAnimations'
import ScrollEvent from './page/Animated/ScrollEvent'
import TouchEvent from './page/Animated/TouchEvent'
import SimpleLayoutAnimation from './page/LayoutAnimation/SimpleLayoutAnimation'

const MainStack = StackNavigator({
  Main: {
    screen: Main
  },
  Simple: {
    screen: Simple
  },
  SingleValueToMultiProps: {
    screen: SingleValueToMultiProps
  },
  ComposingAnimations: {
    screen: ComposingAnimations
  },
  ScrollEvent: {
    screen: ScrollEvent
  },
  TouchEvent: {
    screen: TouchEvent
  },
  SimpleLayoutAnimation: {
    screen: SimpleLayoutAnimation
  }
})

export { MainStack as App }