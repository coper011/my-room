import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';

//notepad and settings: h = scale2*140 br = 25

export function Notification(content: string, eyeStep: boolean, buttonText: string, functions: Array<()=>void>, index: number) {

  const { width } = Dimensions.get('window');
  const { height } = Dimensions.get('window');
  const scale = Math.sqrt(width)/15;
  const scale2 = width/300;

  let inAnimation: string = "slideInUp";
  let outAnimation = 'slideOutDown';
  let inAnimationDuration = 900;
  //eye step size (for eye notids, fontSize=8)
  //non-eye step size (for water notifs, fontSize=10)
  let fontSize1 = 10;
  if (eyeStep) {
    fontSize1 = 8;
    inAnimation = 'slideInLeft';
    outAnimation = 'slideOutRight';
    inAnimationDuration = 300;
  } 

  function xButton(){
    if (!eyeStep) {
      return <Pressable onPress={handleModal}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>;
    }
  }

  function displayButton(){
    if (eyeStep) {
      functions[index] = handleModal;
      return <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height: 'auto'}}>
        <Pressable onPress={handleModal} style={{backgroundColor: '#C7A579', borderRadius: 10, marginRight: '5%', marginTop: '2%', padding: '1%', paddingLeft: '2%', paddingRight: '2%'}}><Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: 'white'}}>{buttonText}</Text></Pressable>
      </View>;
    }
  }

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

  const [isModalVisible, setIsModalVisible] = React.useState(!eyeStep);
  const handleModal = () => setIsModalVisible(!isModalVisible);

  return (<Modal isVisible={isModalVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)} animationInTiming={inAnimationDuration} animationIn={inAnimation} animationOut= {outAnimation} onModalHide={functions[index+1]}>
    <View style={styles.popupStyle}>
      {/*top row view*/}
      <View style={styles.popupTopRowStyle}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.popupTopRowTextStyle}>reminder!</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          {xButton()}
        </View>
      </View>
      {/*body view*/}
      <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', flex: 1}}>
        <Text style={{fontFamily: 'NerkoOne', fontSize: scale2*fontSize1, color: '#2E2929', textAlign: 'center'}}>{content}</Text>
        {displayButton()}
      </View>
    </View>
</Modal>);
}
