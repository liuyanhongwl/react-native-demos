/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var TouchAction = {
    showAction: 'showAction',
    updateProps: 'updateProps',
    updateState: 'updateState'
};

export default class D_Component extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      customShow: false,
      touchAction: TouchAction.showAction
    };

    this.handlePress = this.handlePress.bind(this);
    this.renderTouchableView = this.renderTouchableView.bind(this);
  }

  render() {
    if(this.state.customShow) {
      return (
        <View style={styles.container}>
          {this.renderTouchableView()}
          <CustomComponent />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          {this.renderTouchableView()}
        </View>
      );
    }
  }

  renderTouchableView() {
    return (
      <TouchableHighlight 
        //style={{padding: 100}}
        onPress={this.handlePress}
      >
        <Text>{this.state.touchAction}</Text>
      </TouchableHighlight>
    );
  }

  handlePress() {
    if (this.state.touchAction == TouchAction.showAction) {
      this.setState((prevState, props) => ({ 
        customShow: !prevState.customShow,
        touchAction: !prevState.customShow ? TouchAction.updateProps : TouchAction.showAction
      }));
    }else if(this.state.touchAction == TouchAction.updateProps) {
      this.setState({touchAction: TouchAction.updateState});
    }else if(this.state.touchAction == TouchAction.updateState) {
      this.setState({touchAction: TouchAction.showAction});
    }
  }
}


class CustomComponent extends Component {
  //Mounting

  constructor(props) {
    super(props);
    console.log('custom constructor');

    this.state = {name: '小花'};
  }

  componentWillMount() {
    console.log('custom componentWillMount');
  }

  render() {
    console.log('custom render');
    return (
      <View style={styles.customComponent}>
        <Text>Custom Component</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log('custom componentDidMount');
  }

  //Updating

  componentWillReceiveProps(porps) {
    console.log('custom componentWillReceiveProps');

    this.setState((prevState) => {
      return {name: '大花'};
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('custom shouldComponentUpdate');

    console.log(this.state);
    console.log(nextState);

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('custom componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('custom componentDidUpdate');
  }

  //Unmounting

  componentWillUnmount() {
    console.log('custom componentWillUnmount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  customComponent: {
    padding: 50,
    backgroundColor: 'blue'
  }
});

AppRegistry.registerComponent('D_Component', () => D_Component);
