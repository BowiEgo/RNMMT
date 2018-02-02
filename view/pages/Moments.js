import React, { Component } from 'react';
import {
  ListView,
  RefreshControl,
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
                      size={22} 
                      color="#fff" 
                      onPress={() => navigate('Settings')}
                    />)
    }
  }
  
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5']),
    }
  }

  _onRefresh () {
    this.setState({ refreshing: true })
    this._fetchData().then(() => {
      this.setState({ refreshing: false })
    })
  }

  _fetchData () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.setState({
          dataSource: ds.cloneWithRows(['5', '4', '3', '2', '1'])
        })
        resolve()
      }, 1000)
    })
  }

  render() {
    return(
      <View style={ styles.momentsContainer }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ (rowData) => <Follow name={ rowData }/> }
          refreshControl={
            <RefreshControl
              tintColor={"red"}
              refreshing={ this.state.refreshing }
              onRefresh={ this._onRefresh.bind(this) }
            />
          }
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
    marginRight: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#2196f3'
  }
})