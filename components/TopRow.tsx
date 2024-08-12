import { Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { View, Pressable, Text } from "react-native";
import React, { useEffect, useState } from 'react';
import Modal from "react-native-modal";
import { Notepad } from '@/components/Notepad';
import { Settings } from '@/components/Settings';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const scale = Math.sqrt(width)/15;
const scale2 = width/300;

export function TopRow(title: string, isRoom: boolean) {
  const styles = StyleSheet.create({
    titleText: {
      marginTop: 20,
      fontFamily: 'NerkoOne',
      fontSize: 40,
      color: '#C7A579',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3C402F',
      width: '100%',
      height: 78,  //  not to occupy all height @ iPhone
      paddingBottom: 5,
    },
    path: {
      backgroundColor: '#D9D9D9',
      width: '20%',
    },
    popupStyle: {
      width: scale2*200, 
      height: scale2*140, 
      backgroundColor: '#A1663C', 
      alignSelf: 'center', 
      borderRadius: scale*25,
      overflow: 'hidden',
    },
    popupTopRowStyle: {
      backgroundColor: '#381B13',
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
    subBodyStyle: {
      flexDirection: 'row',
      flex: 1,
    },
    displayColumn: {
      flex: 1,
      backgroundColor: '#D9D9D9',
    },
    scrollColumn: {
      flex: 3,
    },
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
      fontSize: 13 * scale,
      color: '#503D32',
      textAlign: 'center',
    },
    circle: {
      width: scale2*50,
      height: scale2*50,
      borderRadius: scale2*25,
      backgroundColor: '#D9D9D9',
      overflow: 'hidden',
      marginLeft: scale2*25/2,
      marginRight: scale2*25/2,
    },
    circleView: {
      justifyContent: 'center', 
      marginTop: '5%',
      marginBottom: '5%',
    },
  });

  const [isNotepadVisible, setIsNotepadVisible] = React.useState(false);
  const handleNotepad = () => setIsNotepadVisible(!isNotepadVisible);

  const [isSettingsVisible, setIsSettingsVisible] = React.useState(false);
  const handleSettings = () => setIsSettingsVisible(!isSettingsVisible);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const [isIndoorVisible, setIsIndoorVisible] = React.useState(false);
  const handleIndoor = () => setIsIndoorVisible(() => !isIndoorVisible);

  const [isPetsVisible, setIsPetsVisible] = React.useState(false);
  const handlePets = () => setIsPetsVisible(() => !isPetsVisible);

  const [isOutdoorVisible, setIsOutdoorVisible] = React.useState(false);
  const handleOutdoor = () => setIsOutdoorVisible(() => !isOutdoorVisible);

  const [isClosetVisible, setIsClosetVisible] = React.useState(false);
  const handleCloset = () => setIsClosetVisible(() => !isClosetVisible);

  const [currentTime, setCurrentTime] = useState(String);
  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      let formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(formatter.format(date));
    }, 1000);
    return () => clearInterval(time)
  }, []);

  function displayClock() {
    if(isRoom) {
      return <View style={{backgroundColor: '#2E2929', width: '80%', height: '90%', marginLeft: '5%', justifyContent: 'center', alignItems: 'center', borderColor: '#d9d9d9', borderWidth: scale*4, borderRadius: scale*5, marginTop: '10%'}}>
        <Text style={{fontFamily: 'NerkoOne', color: '#C7A578', fontSize: scale*25, textAlign: 'center'}}>{currentTime}</Text>
      </View>;
    }
  }
  //icons = notepad, settings, and world
  function displayIcons() {
    if(isRoom) {
      return <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/*notepad modal*/}
      <Pressable onPress={handleNotepad}><Image source={require('@/assets/images/copper.webp')} style={{resizeMode: 'center', width: 30, height: '100%', marginRight: '5%'}}/></Pressable>
      <Modal isVisible={isNotepadVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
        {Notepad(handleNotepad)}
      </Modal>
      {/*settings modal*/}
      <Pressable onPress={handleSettings}><Image source={require('@/assets/images/copper.webp')} style={{resizeMode: 'center', width: 30, height: '100%', marginRight: '5%'}}/></Pressable>
      <Modal isVisible={isSettingsVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
        {Settings(handleSettings)}
      </Modal>
      {/*world icon*/}
      <Pressable onPress={handleModal}><Image source={require('@/assets/images/copper.webp')} style={{resizeMode: 'center', width: 30, height: '100%', marginRight: '5%'}}/></Pressable>
      </View>
    }
  }
  
  return <View style={styles.titleView}>
  <View style={{flex: 1, justifyContent: 'center'}}>
    {displayClock()}
  </View>
  <View style={{flex: 1, alignItems: 'center'}}>
    <Text style={styles.titleText}>{title}</Text>
  </View>
  {/*stats view*/}
  <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row', }}>
    {displayIcons()}
    {/*inventory modal*/}
    <Pressable onPress={handleModal}><Image source={require('@/assets/images/copper.webp')} style={{resizeMode: 'center', width: 30, height: '100%', marginRight: '5%'}}/></Pressable>
    <Modal isVisible={isModalVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)/*Modal bug @ iPad landscape*/}>
      <View style={styles.popupStyle}>
        {/*inventory top row view*/}
        <View style={styles.popupTopRowStyle}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.popupTopRowTextStyle}>inventory</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Pressable onPress={handleModal}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
          </View>
        </View>
        {/*inventory body*/}
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            {/*indoor modal*/}
            <Pressable onPress = {handleIndoor}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('@/assets/images/house-removebg-preview 2.png')} style={{width: scale2*40, height: scale2*40,}}/>
                <Text style={[styles.popupTopRowTextStyle, {margin: 0}]}>indoor</Text>
              </View>
            </Pressable>
            <Modal isVisible={isIndoorVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
              <View style={styles.popupStyle}>
                {/*indoor top row view*/}
                <View style={styles.popupTopRowStyle}>
                  <View style={{flex: 1}}></View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.popupTopRowTextStyle}>indoor</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Pressable onPress={handleIndoor}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
                  </View>
                </View>
                {/*indoor body*/}
                <View style={styles.subBodyStyle}>
                  {/*category column*/}
                  <View style={styles.displayColumn}>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#A1663C'}]}>show all</Text>
                    </View>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#503D32'}]}>desk</Text>
                    </View>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#503D32'}]}>background</Text>
                    </View>
                  </View>
                  {/*scroll column*/}
                  <View style={styles.scrollColumn}>
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
                      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </Modal>
            {/*pets modal*/}
            <Pressable onPress = {handlePets}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('@/assets/images/house-removebg-preview 2.png')} style={{width: scale2*40, height: scale2*40,}}/>
                <Text style={[styles.popupTopRowTextStyle, {margin: 0}]}>pets</Text>
              </View>
            </Pressable>
            <Modal isVisible={isPetsVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
              <View style={styles.popupStyle}>
                {/*pets top row view*/}
                <View style={styles.popupTopRowStyle}>
                  <View style={{flex: 1}}></View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.popupTopRowTextStyle}>pets</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Pressable onPress={handlePets}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
                  </View>
                </View>
                {/*pets body*/}
                <View style={styles.subBodyStyle}>
                  {/*category column*/}
                  <View style={styles.displayColumn}>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#A1663C'}]}>show all</Text>
                    </View>
                  </View>
                  {/*scroll column*/}
                  <View style={styles.scrollColumn}>
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
                      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>copper</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>kitty</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>benji</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={{flex:1, justifyContent: 'space-evenly', alignContent: 'center',}}>
            {/*outdoor modal*/}
            <Pressable onPress = {handleOutdoor}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('@/assets/images/house-removebg-preview 2.png')} style={{width: scale2*40, height: scale2*40,}}/>
                <Text style={[styles.popupTopRowTextStyle, {margin: 0}]}>outdoor</Text>
              </View>
            </Pressable>
            <Modal isVisible={isOutdoorVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
              <View style={styles.popupStyle}>
                {/*outdoor top row view*/}
                <View style={styles.popupTopRowStyle}>
                  <View style={{flex: 1}}></View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.popupTopRowTextStyle}>outdoor</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Pressable onPress={handleOutdoor}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
                  </View>
                </View>
                {/*outdoor body*/}
                <View style={styles.subBodyStyle}>
                  {/*category column*/}
                  <View style={styles.displayColumn}>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#A1663C'}]}>show all</Text>
                    </View>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#503D32'}]}>garden</Text>
                    </View>
                    <View style={styles.categoryView}>
                      <Text style={[styles.textStyle, {color: '#503D32'}]}>decor</Text>
                    </View>
                  </View>
                  {/*scroll column*/}
                  <View style={styles.scrollColumn}>
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
                      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </Modal>
            {/*closet modal*/}
            <Pressable onPress = {handleCloset}>
              <View style={{alignItems: 'center'}}>
                <Image source={require('@/assets/images/house-removebg-preview 2.png')} style={{width: scale2*40, height: scale2*40,}}/>
                <Text style={[styles.popupTopRowTextStyle, {margin: 0}]}>closet</Text>
              </View>
            </Pressable>
            <Modal isVisible={isClosetVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
              <View style={styles.popupStyle}>
                {/*closet top row view*/}
                <View style={styles.popupTopRowStyle}>
                  <View style={{flex: 1}}></View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.popupTopRowTextStyle}>closet</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Pressable onPress={handleCloset}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*5}]}>X</Text></Pressable>
                  </View>
                </View>
                {/*closet body*/}
                <View style={styles.subBodyStyle}>
                  {/*category column*/}
                  <View style={{flex: 1, backgroundColor: '#D9D9D9'}}>
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>hair</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>face</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>skin</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#A1663C'}]}>tops</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>bottoms</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>shoes</Text>
                      </View>
                      <View style={styles.categoryView}>
                        <Text style={[styles.textStyle, {color: '#503D32'}]}>accessories</Text>
                      </View>
                    </ScrollView>
                  </View>
                  {/*scroll column*/}
                  <View style={{flex: 1}}>
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
                      <View style={{alignItems: 'center'}}>
                        <View style={styles.circleView}>
                          <View style={[styles.circle, {marginLeft: 0, marginRight: 0}]}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                        <View style={styles.circleView}>
                          <View style={styles.circle}></View>
                          <Text style={[styles.textStyle]}>mint-t-shirt</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                  {/*dressup column*/}
                  <View style={{backgroundColor: '#C7A579', flex: 1}}>

                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </Modal>
    <Text style={[styles.titleText, {fontSize: 30, marginRight: '2%'}]}>150</Text>
    <View>{/*otherwise Image height 0*/}
      <Image source={require('@/assets/images/copper.webp')} style={{resizeMode: 'center', width: 30, height: '100%', marginRight: '5%'}}/>
    </View>
    <View style={{justifyContent: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.titleText, {fontSize: 30,}]}>lvl </Text>
        <Text style={[styles.titleText, {fontSize: 30, marginRight: '5%'}]}>10</Text>
      </View>
      <View>
        <Text>--------</Text>
      </View>
    </View>
  </View>
</View>
;
}
