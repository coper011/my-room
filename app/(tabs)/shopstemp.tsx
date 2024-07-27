import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;

export default function Temp() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9'}}>
      {/*title view*/}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Clothing Outlet</Text>
      </View>
      {/*body view*/}
      <View style={{flexDirection: 'row', flex: 1}}>
        {/*category column*/}
        <View style={{flex: 0.8, height: '100%'}}>
          <View style={styles.categoryView}></View>
          <View style={styles.categoryView}></View>
          <View style={styles.categoryView}></View>
        </View>
        {/*items diplay*/}
        <View style={{backgroundColor: '#A1663C', flex: 2, height: '100%'}}></View>
        {/*items info*/}
        <View style={{backgroundColor: '#503D32', flex: 1, height: '100%'}}></View>
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
  categoryView: {
    width: '100%', 
    height: scale * 30,
    borderBottomWidth: scale * 2,
    borderBottomColor: '#503D32',
    opacity: 0.5,
  },
});



