import React, {useState} from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, Pressable, TextInput, Switch } from 'react-native';
import Modal from 'react-native-modal';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { ChevronDownIcon } from './ui/icon';

//notepad and settings: h = scale2*140 br = 25

export function Settings(handleModal1:()=>void) {

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
    inputStyle: {
      height: '100%', 
      width: '100%', 
      fontFamily: 'NerkoOne', 
      fontSize: scale2*13, 
      color: '#565050', 
      textAlign: 'center',
    },
    inputViewStyle: {
      width: scale2*25, 
      height: scale2*15, 
      backgroundColor: '#BBB2B2', 
      marginTop: '3%', 
      borderRadius: scale*5,
    }
    });

  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const handleModal = () => setIsModalVisible(!isModalVisible);

  const [text, onChangeText] = React.useState('25');
  const [text1, onChangeText1] = React.useState('5');
  const [text2, onChangeText2] = React.useState('15');
  const [text3, onChangeText3] = React.useState('4');

  const [isWaterEnabled, setIsWaterEnabled] = useState(false);
  const toggleSwitchWater = () => setIsWaterEnabled(previousState => !previousState);

  const [isStretchEnabled, setIsStretchEnabled] = useState(false);
  const toggleSwitchStretch = () => setIsStretchEnabled(previousState => !previousState);

  const [isEyeEnabled, setIsEyeEnabled] = useState(false);
  const toggleSwitchEye = () => setIsEyeEnabled(previousState => !previousState);

  return <View style={styles.popupStyle}>
        {/*top row view*/}
        <View style={styles.popupTopRowStyle}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.popupTopRowTextStyle}>settings</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Pressable onPress={handleModal1}><Text style={[styles.popupTopRowTextStyle, {marginRight: scale2*15}]}>X</Text></Pressable>
          </View>
        </View>
        {/*body view*/}
        <View style={{height: '100%', flex: 1}}>
          <ScrollView style={{width: '100%'}} contentContainerStyle={{flexGrow:1}}>
          {/*volume and alarm*/}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:2, borderBottomWidth: 1, borderColor: '#7F7D7D'}}>
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
              <Select initialLabel={'alarm'} style={[{marginLeft: '5%'}]}>
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
                    <SelectItem label="twinkle" value="twinkle"/>
                    <SelectItem label="ding" value="ding" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
          </View>
          {/*set times*/}
          <View style={{flex: 4, borderBottomWidth: 1, borderColor: '#7F7D7D', padding: '2%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex:1}}>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.textStyle, {textAlign: 'center'}]}>pomodoro:</Text>
                <View style={styles.inputViewStyle}>
                  <TextInput style={styles.inputStyle} onChangeText={onChangeText} value={text} maxLength={2} keyboardType="numeric" />
                </View>
              </View>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.textStyle, {textAlign: 'center'}]}>short break:</Text>
                <View style={styles.inputViewStyle}>
                  <TextInput style={styles.inputStyle} onChangeText={onChangeText1} value={text1} maxLength={2} keyboardType="numeric" />
                </View>
              </View>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.textStyle, {textAlign: 'center'}]}>long break:</Text>
                <View style={styles.inputViewStyle}>
                  <TextInput style={styles.inputStyle} onChangeText={onChangeText2} value={text2} maxLength={2} keyboardType="numeric" />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center'}}>
              <Text style={[styles.textStyle, {textAlign: 'center', marginRight: '2%'}]}>long break interval:</Text>
              <View style={styles.inputViewStyle}>
                <TextInput style={styles.inputStyle} onChangeText={onChangeText3} value={text3} maxLength={1} keyboardType="numeric" />
              </View>
            </View>
          </View>
          {/*reminder toggles*/}
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 3, borderBottomWidth: 1, borderColor: '#7F7D7D', padding: '2%'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <Text style={[styles.textStyle, {textAlign: 'center', marginRight: '2%'}]}>water reminder:</Text>
              <Switch
                trackColor={{false: '#767577', true: '#A1663C'}}
                thumbColor={'#C7A579'}
                onValueChange={toggleSwitchWater}
                value={isWaterEnabled}
              />
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050', marginLeft: '5%'}}>every</Text>
              <View style={{width: scale2*13, height: scale2*10, backgroundColor: '#BBB2B2', borderRadius: scale*2, margin: '2%'}}>
                <TextInput style={[styles.inputStyle, {fontSize: scale2*9,}]} placeholder={'30'} maxLength={2} keyboardType="numeric" />
              </View>
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050'}}>min</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '2%'}}>
              <Text style={[styles.textStyle, {textAlign: 'center', marginRight: '2%'}]}>stretch reminder:</Text>
              <Switch
                trackColor={{false: '#767577', true: '#A1663C'}}
                thumbColor={'#C7A579'}
                onValueChange={toggleSwitchStretch}
                value={isStretchEnabled}
              />
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050', marginLeft: '5%'}}>every</Text>
              <View style={{width: scale2*13, height: scale2*10, backgroundColor: '#BBB2B2', borderRadius: scale*2, margin: '2%'}}>
                <TextInput style={[styles.inputStyle, {fontSize: scale2*9,}]} placeholder={'30'} maxLength={2} keyboardType="numeric" />
              </View>
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050'}}>min</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '2%'}}>
              <Text style={[styles.textStyle, {textAlign: 'center', marginRight: '2%'}]}>eye protection exercise:</Text>
              <Switch
                trackColor={{false: '#767577', true: '#A1663C'}}
                thumbColor={'#C7A579'}
                onValueChange={toggleSwitchEye}
                value={isEyeEnabled}
              />
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050', marginLeft: '5%'}}>every</Text>
              <View style={{width: scale2*13, height: scale2*10, backgroundColor: '#BBB2B2', borderRadius: scale*2, margin: '2%'}}>
                <TextInput style={[styles.inputStyle, {fontSize: scale2*9,}]} placeholder={'30'} maxLength={2} keyboardType="numeric" />
              </View>
              <Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#565050'}}>min</Text>
            </View>
          </View>
          {/*clock type and submit button*/}
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 2, }}>
            <Pressable style={{backgroundColor: '#144E52', borderRadius: 100, height: scale*20, width: scale*50, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontFamily: 'NerkoOne', fontSize: scale*12, color: '#F3EFEA', textAlign: 'center'}}>submit</Text></Pressable>
          </View>
          </ScrollView>
        </View>
      </View>};
