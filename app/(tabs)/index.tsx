import { Image, StyleSheet } from 'react-native';
import { View, TextInput, Pressable, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function HomeScreen() {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignContent: 'center'}}>
      <ScrollView style={{width: '100%'}}>
      {/*login title*/}
      <View style={styles.titleContainer}>
        <Text style={{fontFamily: "NerkoOne", fontSize: 40, color: '#C7A579', marginTop: 20}}>Login</Text>
      </View>
      {/*username and password input boxes*/}
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.stepContainer}>
          <Text style={styles.textStyle}>username:</Text>
          <TextInput 
          style={styles.textInputStyle}
          placeholder='   copperstudies'
          maxLength= {10}
          />
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.textStyle}>password:</Text>
          <TextInput 
          style={styles.textInputStyle}
          placeholder='   password123'
          maxLength= {20}
          />
        {/*login buttons*/}
        </View>
        <View style={{marginTop: 20}}>
          <Pressable style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>LOG IN</Text></Pressable>
          <Pressable style={{marginTop: 5}}><Text style={{color: '#2E2929', fontFamily: "NerkoOne", textAlign: 'center'}}>REGISTER</Text></Pressable>
        </View>
        <View style={{marginTop: 20}}>
          <Pressable style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>LOGIN w/ Google</Text></Pressable>
        </View>
        <View style={{marginBottom: 40}}>
          <Pressable style={styles.buttonStyle}><Text style={styles.buttonTextStyle}>LOGIN w/ Meta</Text></Pressable>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#3C402F',
    width: '100%',
    paddingBottom: 5,
    height: 78,
  },
  stepContainer: {
    marginTop: 20,
    textAlign: 'right',
    backgroundColor: '#D9D9D9',
    color: '#A1663C',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textStyle: {
    fontFamily: "NerkoOne",
    color: '#A1663C',
    fontSize: 25,
  },
  buttonStyle: {
    marginTop: 15, 
    backgroundColor: '#A1663C', 
    width: 300, 
    height: 30, 
    borderRadius: 100,
  },
  buttonTextStyle: {
    color: 'white', 
    fontFamily: "NerkoOne", 
    fontSize: 25, 
    textAlign: 'center',
  },
  textInputStyle: {
    backgroundColor: '#BBB2B2', 
    width: 300, 
    height: 30, 
    borderRadius: 100,
  }
});

