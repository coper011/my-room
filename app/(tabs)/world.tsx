import { Image, StyleSheet, Platform, ImageBackground } from 'react-native';
import { View, TextInput, Pressable, Text } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

export default function World() {
  return (
    <View style = {{backgroundColor: '#89AE80', width: '100%', height: '100%'}}>
      {/*My World title*/}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>My World</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1}}>
        {/*House*/}
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex:1}}></View>
          <View style={{alignSelf: 'center'}}>
            <Image source={require('@/assets/images/house-removebg-preview 2.png')} style={{resizeMode: 'center'}}></Image>
          </View>
          <View style={{flex:1}}></View>
        </View>
        {/*Path*/}
        <View style={styles.path}>
        </View>
        <View style={{flex: 1}}>

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
    backgroundColor: '#D9D9D9',
    width: '20%',
    
  },
});



