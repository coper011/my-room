import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable } from 'react-native';

export function Shop(categories: Array<string>, items: Array<any>) {

  const { width } = Dimensions.get('window');
  const scale = Math.sqrt(width)/15;
  const scale2 = width/300;


  const [selection, setSelection] = React.useState(0);
  const handles = items.map(
    (item,index)=> ()=> setSelection(()=> index)
  );

  const styles = StyleSheet.create({
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

  return (<View style={{flexDirection: 'row', flex: 1}}>
  {/*category column*/}
  <View style={{flex: 4, height: '100%'}}>
    {
      categories.map(
        (category,index)=>
          <View style={styles.categoryView} key={'categorySection'+index}>
            <Text style={[styles.textStyle, {color: '#503D32'}]}>{category}</Text>
          </View>
      )
    }
  </View>
  {/*items scroll diplay*/}
  <View style={styles.displayView}>
    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
      <View style={{flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center'}}>
        {
          items.map(
            (item,index)=> 
            <View style={styles.circleView} key={'selection'+index}>
              <Pressable onPress={handles[index]}>
                <View style={styles.circle}></View>
              </Pressable>
                <Text style={[styles.textStyle]}>{item['name']}</Text>
              
            </View>
          )
        }
      </View>
    </ScrollView>
  </View>
  {/*items info*/}
  <View style={{backgroundColor: '#503D32', flex: 5, height: '100%', justifyContent: 'space-between'}}>
    {/*description*/}
    <View style={{margin: scale*11,}}>
      <Text style={[styles.textStyle, {fontSize: 11*scale, color: '#D9D9D9', textAlign: 'left'}]}>{items[selection] ['description']}</Text>
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
</View>);
}
