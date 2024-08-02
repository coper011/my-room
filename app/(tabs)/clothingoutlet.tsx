import { Image, StyleSheet, Platform, ImageBackground, View, TextInput, Pressable, Text, ScrollView, Dimensions, } from 'react-native';
import { TopRow } from '@/components/TopRow';
import { Shop } from '@/components/Shop';

const { width } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

export default function clothingOutlet() {
  
  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9'}}>
      {/*title view*/}
      {TopRow('Clothing Outlet')}
      {/*body view*/}
      {Shop(['tops', 'bottoms', 'shoes', 'accessories'], 
        [{
          name: 'mint t-shirt',
          price: 200,
          description: 'Light green and airy t-shirt perfect for summer. Somehow, it is refreshing when worn.',
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