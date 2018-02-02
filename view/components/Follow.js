import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class extends Component {

  render() {
    return(
      <View style={ styles.followContainer }>
        <Text>{ this.props.name }</Text>
        <Image 
          style={ styles.followCancelBtn }
          source={require('../assets/img/butuisong.png')}
        />
        <View style={ styles.userContainer }>
          <View style={ styles.userAvatarContainer }>
            <Image 
              style={ styles.userAvatar }
              source={require('../assets/img/tou1.png')}
            />
          </View>
          <View style={ styles.userInfo }>
            <Text style={ styles.userName }>谢俊西</Text>
            <View style={ styles.userStock }>
              <View style={ styles.userStockItem }>
                <Text style={{ letterSpacing: 2, marginBottom: 3 }}>万科A</Text>
                <Text style={{ color: '#9c9c9c', fontSize: 12 }}>000002</Text>
              </View>
              <View style={ styles.userStockItem }>
                <Text style={{ marginBottom: 3 }}>37.54</Text>
                <Text style={{ textAlign: 'center', color: '#ff4c4c', fontSize: 12 }}>买入</Text>
              </View>
              <View style={ styles.userStockItem }>
                <Text style={{ textAlign: 'center', marginBottom: 3 }}>2700</Text>
                <Text style={{ textAlign: 'center', color: '#9c9c9c', fontSize: 12 }}>数量／股</Text>
              </View>
            </View>
            <View style={ styles.userPageBtn }>
              <Text style={{ color: "#fff", textAlign: 'center', fontSize: 13 }}>看TA的主页></Text>
            </View>
          </View>
        </View>
        <View style={ styles.actionContainer }>
          <Text style={styles.actionTime}>2018-02-01 14:56:07</Text>
          <Text style={styles.actionClickNumber}>点击数：0</Text>
          <Text style={styles.actionStar}>0</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  followContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#fff2',
    borderRadius: 3,
    borderWidth: 0.5,
  },
  followCancelBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 10,
  },
  userContainer: {
    paddingTop: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  userAvatarContainer: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 20,
  },
  userAvatar: {
    width: 60,
    height: 60
  },
  userInfo: {},
  userName: {},
  userStock: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#efefef',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
  },
  userStockItem: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 13,
    marginRight: 13,
  },
  userPageBtn: {
    width: 100,
    marginTop: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#3af',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3af',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 2
  },
  actionTime: {
    fontSize: 11,
    color: '#8c8c8c'
  },
  actionClickNumber: {
    fontSize: 11,
    color: '#8c8c8c'
  },
  actionStar: {
    fontSize: 11,
    color: '#8c8c8c'
  },
})