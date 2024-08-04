import React, {useState} from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { ChevronDownIcon } from './ui/icon';

//notepad and settings: h = scale2*140 br = 25

export function Settings() {

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
    textStyle: {
      fontFamily: 'NerkoOne',
      fontSize: scale*15,
      color: '#2E2929',
    },
    });

  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const handleModal = () => setIsModalVisible(!isModalVisible);

  return <View>
    <Modal isVisible={isModalVisible} deviceHeight={Math.min(width,height)} deviceWidth={Math.max(width,height)}>
      <View style={styles.popupStyle}>
        {/*top row view*/}
        <View style={styles.popupTopRowStyle}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.popupTopRowTextStyle}>settings</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Pressable onPress={handleModal}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*15}]}>X</Text></Pressable>
          </View>
        </View>
        {/*body view*/}
        <View style={{height: '100%', flex: 1}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
          {/*volume and alarm*/}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:2, margin: '2%'}}>
            <View style={{flexDirection: 'row', flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textStyle}>volume:</Text>
              <Slider defaultValue={100} orientation="horizontal" style={{width: '50%', marginLeft: '5%'}}>
                <SliderTrack style={{backgroundColor: '#BBB2B2'}}>
                  <SliderFilledTrack style={{backgroundColor: '#C7A579'}}/>
                </SliderTrack>
                <SliderThumb  style={{backgroundColor: '#C7A579'}}/>
              </Slider>
            </View>
            <View style={{flexDirection: 'row', flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textStyle}>alarm sound:</Text>
              <Select initialLabel={'alarm'}>
                <SelectTrigger variant="rounded">
                  <SelectInput placeholder="Select option" />
                  <SelectIcon className="0" as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop/>
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="twinkle" value="twinkle" />
                    <SelectItem label="ding" value="ding" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
          </View>
          {/*set times*/}
          <View style={{flex: 4}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:1}}>
              <View style={{flex:1}}></View>
              <View style={{flex:1}}></View>
              <View style={{flex:1}}></View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1}}>
            </View>
          </View>
          {/*reminder toggles*/}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 3}}>
          </View>
          {/*clock type and submit button*/}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 2}}>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  </View>;
}
