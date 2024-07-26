import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import { View, TextInput, Pressable, Text } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

export default function Room() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>My Room</Text>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 20,
    fontFamily: 'NerkoOne',
    fontSize: 40,
    color: '#C7A579',
  },
  titleView: {
    alignItems: 'center',
    backgroundColor: '#3C402F',
    width: '100%',
    paddingBottom: 5,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});



