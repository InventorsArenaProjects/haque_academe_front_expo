import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const ListContainer = ({children, style}) => {
  return <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>
}

export default ListContainer

const styles = StyleSheet.create({
  wrapper: {
    width: W,
    paddingHorizontal: "5%"
  }
})