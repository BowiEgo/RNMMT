import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { createIconSet } from 'react-native-vector-icons'
const glyphMap = { 'icon-shezhi': 59037 }
const GJIcon = createIconSet(glyphMap, 'iconfont')

export default class extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    return {
      title: '圈子',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2196f3' 
      },
      headerRight: (<GJIcon
                      style={styles.btnGoSettings}
                      name="icon-shezhi" 
                      size={35} 
                      color="#fff" 
                      onPress={() => navigate('Settings')}/>)
    }
  }

  render() {
    return(
      <View style={ styles.momentsContainer }>
        <Text onPress={() => this.props.navigation.navigate('Settings')}>Moments</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  momentsContainer: {},
  btnGoSettings: {
    borderRadius: 0.6,
    backgroundColor: '#2196f3'
  }
})