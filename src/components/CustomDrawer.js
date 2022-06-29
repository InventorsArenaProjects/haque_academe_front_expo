// ------------ System Components ------------ 
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
// ------------ Third Party Components ------------ 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// ------------ Custom Components ------------
import color from '../globalStyles/color'
import logout from '../context/actions/logout'
import { GlobalContext } from '../context/Provider';
// ------------ Constants ------------
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const CustomDrawer = (props) => {
  // global state 
  const { authDispatch, authState } = useContext(GlobalContext);

  const logoutHandler = () => {
    logout()(authDispatch);
  }

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContentStyle}>
        <View style={styles.drawerHeader}>
          <View style={[styles.drawerHeaderImgBox, { alignItems: 'center'}]}>
            <Image source={require('../assets/images/g_std.jpg')}
              style={styles.drawerHeaderImg} />
          </View>
          {/* <View style={styles.statusContainer}>
            <View style={styles.statusBox}>
              <Text style={styles.statusValue}>0</Text>
              <Text style={styles.statusTitle}>Title</Text>
            </View>
            <View style={styles.statusBox}>
              <Text style={styles.statusValue}>0</Text>
              <Text style={styles.statusTitle}>Title</Text>
            </View>
            <View style={styles.statusBox}>
              <Text style={styles.statusValue}>0</Text>
              <Text style={styles.statusTitle}>Title</Text>
            </View>
          </View> */}
        </View>
        <View style={{ backgroundColor: "white" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <TouchableOpacity style={styles.logoutBtn} onPress={logoutHandler}>
          <MaterialIcons name="logout" color={"grey"} size={24} />
          <Text style={{ color: "grey", marginHorizontal: "3%" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: color.colorPrimary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  drawerFooter: {
    justifyContent: "center",
    height: H / 10,
    paddingHorizontal: "5%",
    borderTopWidth: 0.5,
    borderTopColor: "#cccccc"
  },
  drawerContentStyle: {
    backgroundColor: color.colorPrimary
  },
  drawerHeaderImgBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: H / 4
  },
  drawerHeaderImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 100,
    marginLeft: "20%"
    // backgroundColor: "red"
  },
  logoutBtn: {
    flexDirection: "row"
  },
  statusContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingRight: "20%"
  }
});