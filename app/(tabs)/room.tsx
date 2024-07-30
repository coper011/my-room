import { Image, StyleSheet, Platform, ImageBackground, Button } from 'react-native';
import { View, TextInput, Pressable, Text } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import React from 'react';


export default function Room() {

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      {/*Backgorund girl image-to be replaced*/}
      <ImageBackground source={require('@/assets/images/lofi girl.jpeg')} resizeMode="cover" style={styles.image}>
      {/*My Room title*/}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>My Room</Text>
      </View>
      <View>
        <Pressable style={{backgroundColor: 'pink'}} onPress={handleModal}><Text>Press me</Text></Pressable>
        <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
          <Text>Hello!</Text>
          <Pressable onPress={handleModal}><Text>Close</Text></Pressable>
        </View>
      </Modal>
      </View>
      </ImageBackground>
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
    height: 'auto'
  },
});



