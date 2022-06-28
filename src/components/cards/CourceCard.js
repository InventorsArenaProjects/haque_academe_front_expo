// ------------- System Components ------------- 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
// ------------- Custom Components ------------- 
import color from '../../globalStyles/color'
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames'; 

const CourceCard = ({ cardData,navLink }) => {
  // const navigation = useNavigation();
//()=>{navigation.navigate(LOGIN, {course_id: cardData.courseID});}}
  return (
    <TouchableOpacity style={styles.cardBody} activeOpacity={0.7} onPress={navLink}>
      <View>
        <Image source={{ uri: cardData.imageLink }} style={styles.cardImg} />
        <Text style={styles.courseName}>{cardData.courseName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CourceCard

const styles = StyleSheet.create({
  cardBody: {
    height: 130,
    width: 130,
    backgroundColor: color.colorPrimary,
    marginHorizontal: "5%",
    marginVertical: "3%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  cardImg: {
    resizeMode: "contain",
    height: 50,
    marginBottom: 23
  },
  courseName: {
    fontWeight: "bold",
    color: color.whiteColor,
    fontSize: 14
  }
})