import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;

export default function Petstore() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      {/*Pet Center title view*/}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Pet Center</Text>
      </View>
      {/*Main view*/}
      <View style={{flex:1, flexDirection: 'row', width: '100%'}}>
        {/*Scroll column*/}
        <View style={{height: '100%', flex: 1, width: '100%'}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
            {/*copper*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*benji*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*kitty*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*lulu*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*gros chat*/}
            <View style={[styles.circle]}>
              <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*alan in loopi drip*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            {/*lev*/}
            <View style={styles.circle}>
            <Image source={require('@/assets/images/xuncat.png')} style={styles.petIcon}></Image>
            </View>
            <View style={[styles.circle, {backgroundColor: 'black', zIndex: 1, flex: 0, position: 'absolute', opacity: 0.65}]}>

            </View>
          </ScrollView>
        </View>
        {/*Pet display*/}
        <View style={{height: '100%', flex: 3}}>
          <View style={{backgroundColor: '#C7A579', flex: 3, justifyContent: 'flex-end'}}>
          <Image source={require('@/assets/images/xuncat.png')} style={{resizeMode: 'contain', width:'100%', height: '80%'}}></Image>
          </View>
          <View style={{backgroundColor:'#A1663C', flex:1}}>
          </View>
        </View>
        {/*Pet info*/}
        <View style={{height: '100%', flex: 3, backgroundColor: '#503D32'}}>
          {/*"profile", age, name, and image view*/}
          <View style={{flexDirection: 'row', flex: 1}}>
            {/*"profile", age, name*/}
            <View style={{flex: 1}}>
              {/*"profile"*/}
              <Text style={[styles.titleText, {color: '#A1663C', marginTop: '7%', marginLeft: '10%', fontSize: 25 * scale}]}>profile</Text>
              {/*age, name*/}
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textFont, {marginLeft: '10%'}]}>name: </Text>
                <Text style={[styles.textFont, {color: '#D9D9D9'}]}>kitty</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.textFont, {marginLeft: '10%'}]}>age: </Text>
              <Text style={[styles.textFont, {color: '#D9D9D9'}]}>3</Text>
              </View>
            </View>
            {/*image*/}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={require('@/assets/images/copper.webp')} style={styles.petImage}></Image>
            </View>
          </View>
          {/*details and button view*/}
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{}}>
              <Text style={[styles.textFont, {marginLeft: '5%', color: '#D9D9D9', fontSize: 10 * scale}]}>Cute gray cat with a peaceful and calm demeanor. Friendly and likes to play.</Text>
            </View>
            <View style={{}}>
              <Pressable onPress={() => console.log('Hello')} style={styles.buttonStyle}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>adopt (</Text>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>200</Text>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>)</Text>
                </View>
              </Pressable>
            </View>
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
  textFont: {
    fontFamily: 'NerkoOne',
    fontSize: 15 * scale,
    color: '#C7A579',
  },
  buttonStyle: {
    alignSelf: 'center', 
    backgroundColor: '#C7A579',
    width: '50%',
    height: 25 * scale,
    borderRadius: 8 * scale,
    marginBottom: '10%',
  },
  circle: {
    width: scale*40,
    height: scale*40,
    borderRadius: scale*20,
    backgroundColor: '#503D32',
    marginTop: '20%',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  petImage: {
    resizeMode: 'contain', 
    width: '64%', 
    height: '80%', 
    marginTop: '10%',
    borderRadius: 20,
    borderColor: '#C7A579',
    borderWidth: scale * 5,
  },
  petIcon: {
    resizeMode: 'contain', 
    width:'100%', 
    height: '100%', 
  }
});