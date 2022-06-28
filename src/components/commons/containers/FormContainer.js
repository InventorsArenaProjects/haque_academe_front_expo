import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const FormContainer = ({children, style}) => {
  return <View style={[styles.wrapper, style]}>{children}</View>
}

export default FormContainer

const styles = StyleSheet.create({
  wrapper: {
    width: W,
    paddingHorizontal: "5%"
  }
})