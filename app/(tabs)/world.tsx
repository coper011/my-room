import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import { View, TextInput, Pressable, Text } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

export default function Room() {
  return (
    <View style = {{backgroundColor: '#89AE80'}}>
      {/*My World title*/}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>My World</Text>
      </View>
      {/*House*/}
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image source={require('@/assets/images/house-removebg-preview.png')} style={{resizeMode: 'contain'}}></Image>
        </View>
        {/*Path*/}
        <View style={styles.path}>
        </View>
        {/*Up and Down control buttons*/}
        <View style={styles.circle}>
        </View>
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
  path: {
    flex: 1,
    height: '100%',
    backgroundColor: '#D9D9D9',
    marginLeft: '42%',
  },
  circle: {
    marginLeft: 'auto',
    marginRight: '3%',
    marginTop: '30%',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    flex: 1,
  },
});



