import React, { Component } from 'react'
import {
  Animated,
  View,
  Button
} from 'react-native'

class Simple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Text style={{opacity: this.state.fadeAnim}}>
          Simple Animated Used Animated.timing
        </Animated.Text>
        <Button title="touch me"
                onPress={() => {
                  Animated.timing(
                    this.state.fadeAnim,
                    {toValue: 1}
                  ).start()
                }}/>
      </View>
    )
  }
}

export default Simple