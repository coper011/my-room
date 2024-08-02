import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable } from 'react-native';

//notepad and settings: h = scale2*140 br = 25

//eye step size = 
//non eye step size = scale*15

export function Notification(content: string, size: number,) {

  const { width } = Dimensions.get('window');
  const scale = Math.sqrt(width)/15;
  const scale2 = width/300;

  const styles = StyleSheet.create({
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

  return <View style={styles.popupStyle}>
  {/*top row view*/}
  <View style={styles.popupTopRowStyle}>
    <View style={{flex: 1}}></View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.popupTopRowTextStyle}>reminder!</Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
      <Pressable onPress={handleModalRoom}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
    </View>
  </View>
  {/*body view*/}
  <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', flex: 9}}>
    <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#2E2929', textAlign: 'center'}}>3. Find the points one finger away from your nose and massage the points in circular motion for 30s.</Text>
    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height: 'auto'}}>
      <Pressable style={{backgroundColor: '#C7A579', borderRadius: 7, marginRight: '5%',}}><Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: 'white'}}>next step</Text></Pressable>
    </View>
  </View>
  <View style={{flex: 1}}></View>
</View>;
}
