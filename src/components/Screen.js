import React from "react";
import { StyleSheet, SafeAreaView, View,StatusBar} from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});

export default Screen;