import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const MenuQuestion = ({navigation}) => {
  return (
    <SafeAreaView style={{height: H, backgroundColor: '#fff'}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffff"
        translucent={true}
      />
      {/* Start of heading code */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 100,
            marginTop: '11%',
            marginLeft: '3%',
          }}></Image>
        <Text
          style={{
            fontSize: 19,
            color: '#fff',
            marginTop: '13%',
            marginLeft: '6%',
          }}>
          Candidates Name
        </Text>
        <Entypo
          name="cross"
          size={25}
          color={'white'}
          onPress={navigation.goBack}
          style={{marginTop: '13%', marginLeft: '35%'}}
        />
      </View>
      {/* end of heading code */}

      <View style={styles.secondpos}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '40%',
            width: '70%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: 'green',
                borderRadius: 20,
              }}></View>
            <Text style={{color: 'black', marginLeft: '3%'}}>Un-Attempted</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: 'blue',
                borderRadius: 20,
              }}></View>
            <Text style={{color: 'black', marginLeft: '3%'}}>Attempted</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '40%',
            width: '70%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: 'yellow',
                borderRadius: 20,
              }}></View>
            <Text style={{color: 'black', marginLeft: '3%'}}>Mard as Read</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: 'red',
                borderRadius: 20,
                marginLeft: '8%',
              }}></View>
            <Text style={{color: 'black', marginLeft: '3%'}}>Un-Seen</Text>
          </View>
        </View>
      </View>

      <View style={styles.thirdpos}>
        <View
          style={{
            height: '25%',
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '28%',
            marginTop: '5%',
          }}>
          <Text style={{color: '#9E1510', textAlign: 'center', fontSize: 15}}>
            Mock Test- Subject Name
          </Text>
        </View>
        <View
          style={{
            height: '25%',
            width: '40%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '30%',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              1
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              2
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              3
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              4
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              5
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              6
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '25%',
            width: '40%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '30%',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              7
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              8
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              9
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              10
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              11
            </Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#9E1510',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              12
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#9E1510',
              width: '30%',
              height: '35%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '35%',
              borderRadius: 7,
            }}>
            <Text style={{color: 'white'}}> Submit Test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1 / 7,
    backgroundColor: '#9E1510',
    flexDirection: 'row',
  },
  secondpos: {
    flex: 1 / 5,
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    elevation: 5,
  },
  thirdpos: {
    flex: 1 / 3,
    //backgroundColor:'yellow',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    elevation: 5,
  },
});
export default MenuQuestion;
