import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, TextInput, Pressable, Text } from "react-native";
import React, { useState } from 'react';


export default function HomeScreen() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      <View style={styles.titleContainer}>
        <Text style={{fontFamily: "NerkoOne", fontSize: 40, color: '#C7A579', textAlign: 'center'}}>login</Text>
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.textStyle}>username:</ThemedText>
        <TextInput 
        style={{backgroundColor: '#BBB2B2', width: 300, height: 30, borderRadius: 100}}
        placeholder='   copperstudies'
        maxLength= {10}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.textStyle}>password:</ThemedText>
        <TextInput 
        style={{backgroundColor: '#BBB2B2', width: 300, height: 30, borderRadius: 100}}
        placeholder='   password123'
        maxLength= {20}
        />
      </ThemedView>
      <View style={{marginTop: 20}}>
        <Pressable style={styles.buttonStyle}><Text style={{color: 'white', fontFamily: "NerkoOne", fontSize: 25, textAlign: 'center'}}>LOG IN</Text></Pressable>
        <Pressable style={{marginTop: 5}}><Text style={{color: '#2E2929', fontFamily: "NerkoOne", textAlign: 'center'}}>REGISTER</Text></Pressable>
      </View>
      <View style={{marginTop: 20}}>
        <Pressable style={styles.buttonStyle}><Text style={{color: 'white', fontFamily: "NerkoOne", fontSize: 25, textAlign: 'center'}}>LOGIN w/ Google</Text></Pressable>
      </View>
      <View>
        <Pressable style={styles.buttonStyle}><Text style={{color: 'white', fontFamily: "NerkoOne", fontSize: 25, textAlign: 'center'}}>LOGIN w/ Meta</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#3C402F',
    width: '100%',
    textAlign: 'center',
    
    paddingTop: 40,
    paddingBottom: 10,
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
  }
});

