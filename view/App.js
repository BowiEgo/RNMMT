/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import PageMoments from './pages/Moments'
import PageSettings from './pages/Settings'

const Navigator = StackNavigator(
  {
    Home: {
      screen: PageMoments
    },
    Settings: {
      path: 'settings',
      screen: PageSettings
    }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333',
      showIcon: true
    }
  }
)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class App extends PureComponent<{}> {
  render() {
    return (
      <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
