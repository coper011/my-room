import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View, TextInput, Pressable, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { BackEnd, myObject, setDocumentId, setMyObject } from '@/components/BackEnd';
import { Account, Client, Permission, Role, Storage, Models, Databases, ID, RealtimeResponseEvent } from 'react-native-appwrite';

let client: Client;
let account: Account;
let storage;
let databases: Databases;

export default function HomeScreen() {
  const [user, setUser] = useState('');
  let subscription;
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  let setupAppwrite = async () => {
    client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66c13d6f0033935e68b3').setPlatform('my.room');
    account = new Account(client);
    storage = new Storage(client);
    databases = new Databases(client);

  }
  if (!client) {
    setupAppwrite();
  }
  let createSession = async () => {
    let documentId;
    try {

      await account.createEmailPasswordSession(usernameValue, passwordValue);
      getAccount();
      setUser('logged in as ' + usernameValue);
      const result = await databases.getDocument(
        'UserData', // databaseId
        '66c1419c00005e239e4a', // collectionId
        documentId=(await account.get()).$id // documentId
      );
      setMyObject(result);
      setDocumentId(documentId);
    } catch (e) {
      setUser('woops! try again! please double-check your email or password' + e + documentId);

    }
  }
  let createAnonymousSession = async () => {
    try{
      await account.createAnonymousSession();
      getAccount();
      setUser('logged in as anonymous');
      
    } catch (e) {
      setUser('woops! try again! '+ e);
    }
}
  let logout = async () => {
    try {
    await account.deleteSession('current');
    setUser('user logged out');
    } catch (e) {
      setUser('woops! try again! '+ e);
    }
  }

  let getAccount = async () => {
    let user = (await account.get()).name;
    //setUser(user);
  }
  BackEnd();
  

  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  return (
    <View style = {{flex: 1, backgroundColor: '#D9D9D9', alignContent: 'center'}}>
      <ScrollView style={{width: '100%'}}>
      {/*login title*/}
      <View style={styles.titleContainer}>
        <Text style={{fontFamily: "NerkoOne", fontSize: 40, color: '#C7A579', marginTop: 20}}>Login</Text>
      </View>
      {/*username and password input boxes*/}
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.stepContainer}>
          <Text style={styles.textStyle}>email:</Text>
          <TextInput 
          value = {usernameValue}
          onChangeText={setUsernameValue}
          style={styles.textInputStyle}
          placeholder='   copperstudies@gmail.com'
          />
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.textStyle}>password:</Text>
          <TextInput 
          value = {passwordValue}
          onChangeText={setPasswordValue}
          style={styles.textInputStyle}
          placeholder='   password123'
          maxLength= {20}
          />
        {/*login buttons*/}
        </View>
        <View style={{marginTop: 20}}>
          <Pressable style={styles.buttonStyle} onPress={createSession} ><Text style={styles.buttonTextStyle}>LOG IN</Text></Pressable>
          <Pressable style={{marginTop: 5}} onPress={logout}>
            <Text style={{color: '#2E2929', fontFamily: "NerkoOne", textAlign: 'center'} }>REGISTER</Text>
          </Pressable>
        </View>
        <View style={{marginBottom: 40}}>
          <Pressable style={styles.buttonStyle} onPress={createAnonymousSession}><Text style={styles.buttonTextStyle}>ANONYMOUS LOGIN</Text></Pressable>
        </View>
        <Text>{user || ''}</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#3C402F',
    width: '100%',
    paddingBottom: 5,
    height: 78,
  },
  stepContainer: {
    marginTop: 20,
    textAlign: 'right',
    backgroundColor: '#D9D9D9',
    color: '#A1663C',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textStyle: {
    fontFamily: "NerkoOne",
    color: '#A1663C',
    fontSize: 25,
  },
  buttonStyle: {
    marginTop: 15, 
    backgroundColor: '#A1663C', 
    width: 300, 
    height: 30, 
    borderRadius: 100,
  },
  buttonTextStyle: {
    color: 'white', 
    fontFamily: "NerkoOne", 
    fontSize: 25, 
    textAlign: 'center',
  },
  textInputStyle: {
    backgroundColor: '#BBB2B2', 
    width: 300, 
    height: 30, 
    borderRadius: 100,
  }
});

