import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, } from 'react-native';
import { TopRow } from '@/components/TopRow';
import { Shop } from '@/components/Shop';

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

export default function itemShop() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9'}}>
      {/*title view*/}
      {TopRow('Item Shop')}
      {/*body view*/}
      {Shop(['desk', 'background', 'garden', 'decorations'], 
        [{
          name: 'mint t-shirt',
          price: 200,
          description: '0',
        }, 
        {
          name: 'cropped hoodie',
          price: 200,
          description: '1',
        }, 
        {
          name: 'silk blouse',
          price: 200,
          description: '2',
        }])}
    </View>
  );
}

const styles = StyleSheet.create({
  
});