import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

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
        <View style={{flex: 4, height: '100%'}}>
          <View style={styles.categoryView}>
            <Text style={[styles.textStyle, {color: '#A1663C'}]}>tops</Text>
          </View>
          <View style={styles.categoryView}>
            <Text style={[styles.textStyle, {color: '#503D32'}]}>bottoms</Text>
          </View>
          <View style={styles.categoryView}>
            <Text style={[styles.textStyle, {color: '#503D32'}]}>shoes</Text>
          </View>
        </View>
        {/*items scroll diplay*/}
        <View style={styles.displayView}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
              <View style={styles.circleView}>
                <View style={styles.circle}></View>
                <Text style={[styles.textStyle]}>mint-t-shirt</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {/*items info*/}
        <View style={{backgroundColor: '#503D32', flex: 5, height: '100%', justifyContent: 'space-between'}}>
          {/*description*/}
          <View style={{margin: scale*11,}}>
            <Text style={[styles.textStyle, {fontSize: 11*scale, color: '#D9D9D9', textAlign: 'left'}]}>Light green and airy t-shirt perfect for summer. Somehow, it feels refreshing when worn.</Text>
          </View>
          {/*button*/}
          <View>
            <Pressable onPress={() => console.log('buy')} style={styles.buttonStyle}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
                <Text style={[styles.textStyle]}>buy (</Text>
                <Text style={[styles.textStyle]}>200</Text>
                <Text style={[styles.textStyle]}>)</Text>
              </View>
            </Pressable>
          </View>
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
  categoryView: {
    width: '100%', 
    height: scale * 30,
    borderBottomWidth: scale * 2,
    borderBottomColor: 'rgba(80, 61, 50, .5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'NerkoOne',
    fontSize: 15 * scale,
    color: '#503D32',
    textAlign: 'center',
  },
  circle: {
    width: scale2*50,
    height: scale2*50,
    borderRadius: scale2*25,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
    marginLeft: width*11/228,
    marginRight: width*11/228,
  },
  circleView: {
    justifyContent: 'center', 
    marginTop: '5%',
    marginBottom: '5%',
  },
  displayView: {
    backgroundColor: '#A1663C', 
    flex: 10, 
    height: '100%', 
  },
  buttonStyle: {
    alignSelf: 'center', 
    backgroundColor: '#C7A579',
    width: '80%',
    height: 25 * scale,
    borderRadius: 8 * scale,
    marginBottom: '10%',
  },
});