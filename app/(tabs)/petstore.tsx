import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, } from 'react-native';
import { TopRow } from '@/components/TopRow';
import { Notification } from '@/components/Notification';
import React from 'react';

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;

export default function Petstore() {

  const [selection, setSelection] = React.useState(0);
{/*imags needed*/}
const pets = [{
  name: 'copper',
  age: 4,
  description: 'Calico cat that exhibits affectionate behavior towards humans but is devious towards other felines. Is slightly overweight, and prefers to play with string-like items - including wires.',
  price: 200,
  headshot: require('@/assets/images/copper.webp'),
  bodyshot:require('@/assets/images/copper.webp'),
  realpicture: require('@/assets/images/copper.webp'),
  lvlUnlocked: 1,
}, 
{
  name: 'benji',
  age: 3,
  description: 'Lucky dog that sometimes looks like a cute puppy, and other times looks like an old man. Enjoys car rides but is very stinky. Will also remain tiny forever.',
  price: 300,
  headshot: require('@/assets/images/benji.png'),
  bodyshot:require('@/assets/images/benji.png'),
  realpicture: require('@/assets/images/benji.png'),
  lvlUnlocked: 3,
}, 
{
  name: 'kitty',
  age: 3,
  description: 'Cute gray cat with a peaceful and calm demeanor. Friendly towards other cats and likes to play.',
  price: 1200,
  headshot: require('@/assets/images/kitty.png'),
  bodyshot:require('@/assets/images/kitty.png'),
  realpicture: require('@/assets/images/kitty.png'),
  lvlUnlocked: 5,
},
{
  name: 'lulu',
  age: 5,
  description: 'Playful dog with a fluffy and curly caramel colored coat. Board-certified cutie and princess. Origins of the nickname “jay doggle” unknown.',
  price: 5000,
  headshot: require('@/assets/images/lulu.png'),
  bodyshot:require('@/assets/images/lulu.png'),
  realpicture: require('@/assets/images/lulu.png'),
  lvlUnlocked: 10,
},
{
  name: 'groschat',
  age: 3,
  description: 'Cute gray cat with a peaceful and calm demeanor. Friendly towards other cats and likes to play.',
  price: 8000,
  headshot: require('@/assets/images/xuncat.png'),
  bodyshot:require('@/assets/images/xuncat.png'),
  realpicture: require('@/assets/images/xuncat.png'),
  lvlUnlocked: 13,
},
{
  name: 'allen',
  age: 6.25,
  description: 'A pink beaver…abnormally large…',
  price: 14000,
  headshot: require('@/assets/images/allensub.png'),
  bodyshot:require('@/assets/images/allensub.png'),
  realpicture: require('@/assets/images/allensub.png'),
  lvlUnlocked: 17,
},
{
  name: 'lev',
  age: 2,
  description: 'The fluffiest angel in the sky.',
  price: 25000,
  headshot: require('@/assets/images/xuncat.png'),
  bodyshot:require('@/assets/images/xuncat.png'),
  realpicture: require('@/assets/images/xuncat.png'),
  lvlUnlocked: 20,
}];
const handles = pets.map(
  (pet,index)=> ()=> setSelection(()=> index)
);
const userPets = [{
  equipped: 0,
  owned: [0, 1, 2],
}];
/*function displayCover() {
  if(userPets.includes()) {
    return <View>
    </View>;
  }
}
*/
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      {/*Pet Center title view*/}
      {TopRow('Pet Center', false)}
      {Notification('get up and move around!', false, '', [], 0,)}
      {/*Main view*/}
      <View style={{flex:1, flexDirection: 'row', width: '100%'}}>
        {/*Scroll column*/}
        <View style={{height: '100%', flex: 1, width: '100%'}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
            {pets.map(
              (pet,index)=> 
              <View style={styles.circle} key={'selection'+index}>
                <Pressable onPress={handles[index]}>
                <Image source={pets[index].headshot} style={styles.petIcon}></Image>
                  <View style={styles.unlockCircle}></View>
                </Pressable>
              </View>
            )}
          </ScrollView>
        </View>
        {/*Pet display*/}
        <View style={{height: '100%', flex: 3}}>
          <View style={{backgroundColor: '#C7A579', flex: 3, justifyContent: 'flex-end'}}>
          <Image source={pets[selection].bodyshot} style={{resizeMode: 'contain', width:'100%', height: '80%'}}></Image>
          </View>
          <View style={{backgroundColor:'#A1663C', flex:1}}>
          </View>
        </View>
        {/*Pet info*/}
        <View style={{height: '100%', flex: 3, backgroundColor: '#503D32'}}>
          <ScrollView>
          {/*"profile", age, name, and image view*/}
          <View style={{flexDirection: 'row', flex: 1}}>
            {/*"profile", age, name*/}
            <View style={{flex: 1}}>
              {/*"profile"*/}
              <Text style={[styles.titleText, {color: '#A1663C', marginTop: '7%', marginLeft: '10%', fontSize: 25 * scale}]}>profile</Text>
              {/*age, name*/}
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textFont, {marginLeft: '10%'}]}>name: </Text>
                <Text style={[styles.textFont, {color: '#D9D9D9'}]}>{pets[selection] ['name']}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.textFont, {marginLeft: '10%'}]}>age: </Text>
              <Text style={[styles.textFont, {color: '#D9D9D9'}]}>{pets[selection] ['age']}</Text>
              </View>
            </View>
            {/*image*/}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={pets[selection].realpicture} style={styles.petImage}></Image>
            </View>
          </View>
          {/*details and button view*/}
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{}}>
              <Text style={[styles.textFont, {marginLeft: '5%', color: '#D9D9D9', fontSize: 10 * scale}]}>{pets[selection] ['description']}</Text>
            </View>
            <View style={{}}>
              <Pressable onPress={() => console.log('Hello')} style={styles.buttonStyle}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>adopt (</Text>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>{pets[selection] ['price']}</Text>
                  <Text style={[styles.textFont, {color: '#503D32'}]}>)</Text>
                </View>
              </Pressable>
            </View>
          </View>
          </ScrollView>
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
  unlockCircle: {
    width: scale*40,
    height: scale*40,
    borderRadius: scale*20,
    alignSelf: 'center',
    backgroundColor: 'black', 
    flex: 0, 
    position: 'absolute', 
    opacity: 0.65, 
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