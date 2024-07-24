import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
<<<<<<< HEAD

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
=======
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
>>>>>>> f148f5c (sync)
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
=======
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
>>>>>>> f148f5c (sync)
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
<<<<<<< HEAD
});
=======
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

>>>>>>> f148f5c (sync)
