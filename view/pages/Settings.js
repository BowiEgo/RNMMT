import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class extends Component {
  static navigationOptions = navigation => ({
    title: '设置',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#2196f3' 
    }
  })

  render() {
    return(
      <View style={ styles.momentsContainer }>
        <Text>Settings</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settingsContainer: {}
})