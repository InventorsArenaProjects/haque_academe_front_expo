import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const Container = ({children, style}) => {
  return <View style={[styles.wrapper, style]}>{children}</View>
}

export default Container

const styles = StyleSheet.create({
  wrapper: {
    width: W,
    paddingHorizontal: "5%"
  }
})