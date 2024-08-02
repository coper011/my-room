import { Image, StyleSheet, Platform, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { View, TextInput, Pressable, Text } from "react-native";
import React from 'react';
import { TopRow } from '@/components/TopRow';

export default function World() {

  return (
    <View style = {{backgroundColor: '#89AE80', flex: 1}}>
      {/*top row view*/}
      {TopRow('My World')}
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
  path: {
    backgroundColor: '#D9D9D9',
    width: '20%',
  },
});



