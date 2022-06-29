import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
//
import Screen from '../components/Screen';
import Header from '../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import SubListItem from '../components/listItems/SubListItem';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
const LiveClass = ({navigation}) => {
  const [data, setData] = useState([
    {
      index: 1,
      platform: 'Teams',
      imageLink:
        'http://assets.stickpng.com/images/5e8cdf0a664eae000408545b.png',
      link: 'https://www.microsoft.com/en-in/microsoft-teams/log-in',
      teacher_name: 'Debadrita Ghosh',
      Subject_name: 'Computer Application',
    },
    {
      index: 2,
      platform: 'Zoom',
      link: 'https://zoom.us/',
      imageLink:
        'https://1000logos.net/wp-content/uploads/2021/06/Zoom-emblem.png',
      teacher_name: 'Debadrita Ghosh',
      Subject_name: 'Computer Application',
    },
    {
      index: 3,
      platform: 'Teams',
      imageLink:
        'http://assets.stickpng.com/images/5e8cdf0a664eae000408545b.png',
      link: 'https://www.microsoft.com/en-in/microsoft-teams/log-in',
      teacher_name: 'Debadrita Ghosh',
      Subject_name: 'Computer Application',
    },
    {
      index: 4,
      platform: 'Zoom',
      link: 'https://zoom.us/',
      imageLink:
        'https://1000logos.net/wp-content/uploads/2021/06/Zoom-emblem.png',
      teacher_name: 'Debadrita Ghosh',
      Subject_name: 'Computer Application',
    },
    {
      index: 5,
      platform: 'Teams',
      imageLink:
        'http://assets.stickpng.com/images/5e8cdf0a664eae000408545b.png',
      link: 'https://www.microsoft.com/en-in/microsoft-teams/log-in',
      teacher_name: 'Debadrita Ghosh',
      Subject_name: 'Computer Application',
    },
  ]);
  const [noData, setNoData] = useState(false);

  return (
    <Screen>
      <Header
        pageName=" Live Class"
        iconName="arrow-back"
        navLink={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          marginHorizontal: 10,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={i => i.index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.8}
              onPress={() => Linking.openURL(item.link)}>
              <View
                style={{
                  width: '30%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.imageLink,
                  }}></Image>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}> Teacher : {item.teacher_name}</Text>
                <Text style={styles.text}>Subject : {item.Subject_name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
};

export default LiveClass;

const styles = StyleSheet.create({
  item: {
    height: H / 6,
    width: '95%',
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
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '60%',
    width: '60%',
  },
  textContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
  },
  text: {color: '#9E1510', fontSize: 15, marginVertical: 5},
});
