import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';

//notepad and settings: h = scale2*140 br = 25

//eye step size = 
//non eye step size = scale*15

export function Notification(content: string) {

  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');
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

  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (<Modal isVisible={isModalVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)} animationInTiming={900}>
    <View style={styles.popupStyle}>
      {/*top row view*/}
      <View style={styles.popupTopRowStyle}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.popupTopRowTextStyle}>reminder!</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Pressable onPress={handleModal}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
        </View>
      </View>
      {/*body view*/}
      <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', flex: 9}}>
        <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#2E2929', textAlign: 'center'}}>{content}</Text>
      </View>
    </View>
</Modal>);
}
