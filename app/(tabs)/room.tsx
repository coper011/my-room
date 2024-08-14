import { Image, StyleSheet, ImageBackground, Dimensions, View, TextInput, Pressable, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TopRow } from '@/components/TopRow';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

export default function Room() {
  
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    interval = setInterval(() => {
      if (seconds <= 0 || !isRunning) {
        clearInterval(interval);
      }else{
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, isRunning, setSeconds, setIsRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(3);
  };

    return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignItems: "center"}}>
      {/*Backgorund girl image-to be replaced*/}
      <ImageBackground source={require('@/assets/images/lofi girl.jpeg')} resizeMode="cover" style={styles.image}>
      {/*My Room title*/}
      {TopRow('My Room', true)}
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/*notepad large view*/}
        <View style={{flex:1}}></View>
        {/*timer large view*/}
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          {/*timer top view*/}
          <View style={{width: '100%', height: scale*27, backgroundColor: '#2E2929', flexDirection: 'row'}}>
            <View style={styles.timerTopRowClearView}>
              <Pressable style={styles.timerPressableView}>
                <Text style={styles.timerTextStyle}>pomodoro</Text>
              </Pressable>
            </View>
            <View style={styles.timerTopRowClearView}>
              <Pressable style={styles.timerPressableView}>
                <Text style={styles.timerTextStyle}>short break</Text>
              </Pressable>
            </View>
            <View style={styles.timerTopRowClearView}>
              <Pressable style={styles.timerPressableView}>
                <Text style={styles.timerTextStyle}>long break</Text>
              </Pressable>
            </View>
          </View>
          {/*timer bottom view*/}
          <View style={{width: '100%',height: scale*45, backgroundColor: '#d9d9d9', borderBottomLeftRadius: scale*10, borderBottomRightRadius: scale*10, marginBottom: '5%', flexDirection: 'row'}}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*40, color: '#C7A578'}}>{Math.floor(seconds/60) + ':' + (seconds - Math.floor(seconds/60)*60)}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Pressable onPress={handleStart} style={[styles.timerMiniPressableView, {marginTop: 0}]}>
                <Text style={[styles.timerTextStyle, {color: '#ffffff'}]}>start</Text>
              </Pressable>
              <Pressable onPress={handlePause} style={styles.timerMiniPressableView}>
                <Text style={[styles.timerTextStyle, {color: '#ffffff'}]}>pause</Text>
              </Pressable>
              <Pressable onPress={handleReset} style={styles.timerMiniPressableView}>
                <Text style={[styles.timerTextStyle, {color: '#ffffff'}]}>reset</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/*speaker/spotify connector large view*/}
        <View style={{flex:1}}></View>
      </View>
      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 'auto'
  },
  timerTopRowClearView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  timerPressableView: {
    width: '90%', 
    height: '60%', 
    borderRadius: 100, 
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerMiniPressableView: {
    width: '60%', 
    height: '25%', 
    borderRadius: 100, 
    backgroundColor: '#BBB2B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%'
  },
  timerTextStyle: {
    fontFamily: 'NerkoOne', 
    fontSize: scale*8, 
    color: '#7F7D7D',
    textAlign: 'center',
    alignSelf: 'center',
  }
});



