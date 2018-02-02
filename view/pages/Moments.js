import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Follow from '../components/Follow'

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
                      size={26} 
                      color="#fff" 
                      onPress={() => navigate('Settings')}
                    />)
    }
  }
  
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5']),
    }
  }

  render() {
    return(
      <View style={ styles.momentsContainer }>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Follow/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  momentsContainer: {
    padding: 10,
    backgroundColor: '#CDDBF0'
  },
  btnGoSettings: {
    padding: 4,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#2196f3'
  }
})