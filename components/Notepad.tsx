import React, {useState} from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from './ui/icon';

//notepad and settings: h = scale2*140 br = 25

export function Notepad(handleModal:()=>void) {

  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');
  const scale = Math.sqrt(width)/15;
  const scale2 = width/300;

  const styles = StyleSheet.create({
    popupStyle: {
      width: scale2*200, 
      height: scale2*140, 
      backgroundColor: '#D9D9D9', 
      alignSelf: 'center', 
      borderRadius: scale*25,
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
    textInputStyle: {
      width: '85%', 
      height: scale*15, 
      borderRadius: 10,
      fontFamily: 'NerkoOne',
      fontSize: scale*15,
      color: '#2E2929',
      marginLeft: '1%',
    },
    });

  

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addNew = () => {
    setComments( [...comments, text]);
    setText("");
  };
  const remove = (index: number) => {
    const all = [...comments];
    all.splice(index, 1);
    setComments(all);
  };

  return <View style={styles.popupStyle}>
        {/*top row view*/}
        <View style={styles.popupTopRowStyle}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.popupTopRowTextStyle}>notepad</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Pressable onPress={handleModal}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*15}]}>X</Text></Pressable>
          </View>
        </View>
        {/*body view*/}
        <View style={{height: '100%', flex: 1}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable style={{marginLeft: '5%', marginTop: '2%'}} onPress={addNew}>
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*15, color: '#BBB2B2'}}>+ </Text>
            </Pressable>
            <TextInput placeholder='add new' placeholderTextColor= '#BBB2B2' style={[styles.textInputStyle, {marginTop: '2%'}]} onChangeText={setText} maxLength={50} value={text}/>
          </View>
          {comments.map((comment,index) => (
            <Checkbox key={index} value = 'checked' aria-label='aria-label' style={{marginLeft: '5%', marginTop: '4%'}}>
              <CheckboxIndicator style={{width: scale*15, height: scale*15}}>
                <View style={{width:'100%', height: '100%', backgroundColor: '#BBB2B2'}}>
                  <CheckboxIcon as={CheckIcon}></CheckboxIcon>
                </View>
              </CheckboxIndicator>
              <CheckboxLabel style={{fontFamily: 'NerkoOne', color: '#2E2929', fontSize: scale*15, width: '85%', marginLeft: '1%'}}>{comment}</CheckboxLabel>
              <Pressable onPress={() => remove(index)}>
                <Text style={{fontFamily: 'NerkoOne', color: '#BBB2B2', fontSize: scale*15}}>X</Text>
              </Pressable>
            </Checkbox>
          ))}
          </ScrollView>
        </View>
      </View>;
}
