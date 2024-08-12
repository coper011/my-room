import { Image, StyleSheet, ImageBackground, Dimensions, View, TextInput, Pressable, Text } from 'react-native';
import React from 'react';
import { TopRow } from '@/components/TopRow';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

export default function Room() {
  
    return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      {/*Backgorund girl image-to be replaced*/}
      <ImageBackground source={require('@/assets/images/lofi girl.jpeg')} resizeMode="cover" style={styles.image}>
      {/*My Room title*/}
      {TopRow('My Room', true)}
      
      <View>
      </View>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 'auto'
  },
  popupStyle: {
    width: scale2*200, 
    height: scale2*60, 
    backgroundColor: '#D9D9D9', 
    alignSelf: 'center', 
    borderRadius: scale*15,
    overflow: 'hidden',
  },
  popupTopRowStyle: {
    backgroundColor: '#144E52',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  popupTopRowTextStyle: {
    fontFamily: 'NerkoOne',
    fontSize: scale*15,
    color: '#D9D9D9',
    marginTop: '5%',
    marginBottom: '5%',
  },
});



