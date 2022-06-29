import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
const Card = ({cardName, imgLink, navLink}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={navLink}>
      <View
        style={{
          width: '40%',
          height: '100%',
          justifyContent: 'center',
          alignItems: cardName === 'Your Notes' ? 'flex-start' : 'center',
        }}>
        <Image style={styles.img} source={imgLink}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cardName}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 120,
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#FFF',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A11A0E',
    borderWidth: 1,
    elevation: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '85%',
    width: '75%',
  },
  textContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {color: '#9E1510', fontSize: 25},
});
export default Card;
