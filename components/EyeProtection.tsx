import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Notification } from '@/components/Notification';

//notepad and settings: h = scale2*140 br = 25

//eye step size = scale*12
//non eye step size = scale*15

export function EyeProtection() {

  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');
  const scale = Math.sqrt(width)/15;
  const scale2 = width/300;

  let functions = new Array(4);

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

  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return <View>
    {Notification('5. Look into the distance as far as you can for 30s. ho', true, 'done!', functions, 4)}
    {Notification('4. Place your thumbs on your temples and use your pointer finger to scrape above and below your eyes for 30s. ', true, 'next step', functions, 3)}
    {Notification('3. Find the points one finger away from your nose and massage the points in circular motion for 30s.', true, 'next step', functions, 2)}
    {Notification('2. Pinch the top part of your nosebridge for 30s.', true, 'next step', functions, 1)}
    {Notification('1. Massage the inner corner of your eyebrows in circular motion for 30s.', true, 'next step', functions, 0)}
    <Modal isVisible={isModalVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)} animationInTiming={900}>
      <View style={styles.popupStyle}>
        {/*top row view*/}
        <View style={styles.popupTopRowStyle}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.popupTopRowTextStyle}>reminder!</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>

          </View>
        </View>
        {/*body view*/}
        <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', flex: 9}}>
          <Text style={{fontFamily: 'NerkoOne', fontSize: scale*20, color: '#2E2929', textAlign: 'center'}}>protect your vision!</Text>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height: 'auto'}}>
            <Pressable onPress={handleModal} style={{backgroundColor: '#C7A579', borderRadius: 7, marginRight: '5%',}}><Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: 'white'}}>begin</Text></Pressable>
          </View>
        </View>
      </View>
    </Modal>
  </View>
  ;
}
