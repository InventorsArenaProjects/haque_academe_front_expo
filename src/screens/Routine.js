import React from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
// import Swiper from 'react-native-swiper';
// import LinearGradient from 'react-native-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header'

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

const Routine = ({ navigation }) => {
    return (
        <>
            <Header
                pageName="Routine"
                iconName="arrow-back"
                navLink={() => navigation.goBack()}
            />
            {/* end of heading code */}
            <View style={{ flex: 8, backgroundColor: 'blue' }}>
                <ScrollView>
                    <View style={styles.body}>

                        <Image style={styles.image}
                            source={require('../assets/images/routine.png')}></Image>
                        <View style={{ borderRadius: 50, height: 58, width: 58, backgroundColor: '#9E1510', justifyContent: 'center', alignItems: 'center', marginTop: '2%', marginLeft: '57%' }}>
                            <MaterialCommunityIcons name="download" size={40} color={'white'} style={styles.icon} />
                        </View>

                    </View>
                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({

    body: {
        paddingHorizontal: 10,
        marginBottom: 200,
        backgroundColor: '#ffff',
        //  padding:'10%', 
        height: '100%',
        width: '110%',
        // justifyContent:'center',
        alignItems: 'center'

    },

    image: {
        height: H,
        width: '72%',
        //    padding:'2%',
        resizeMode: 'cover',
        marginRight: '10%',
        marginTop: '4%'
    }, icon: {
        marginTop: '7%',

    }
})
export default Routine;