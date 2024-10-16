import { Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { View, Pressable, Text } from "react-native";
import React, { useEffect, useState } from 'react';
import { Account, Client, Permission, Role, Storage, Models, Databases, ID, RealtimeResponseEvent } from 'react-native-appwrite';

let client: Client;
let account: Account;
let storage;
let databases: Databases;
client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66c13d6f0033935e68b3').setPlatform('my.room');
account = new Account(client);
storage = new Storage(client);
databases = new Databases(client);
let documentId: string;

export function setDocumentId (docId: string) {
  documentId = docId;
}
export function updateDocument() {
  databases.updateDocument(
    'UserData', // databaseId
    '66c1419c00005e239e4a', // collectionId
    documentId, // documentId
    {
      addressed: JSON.stringify(myObject)
    }, // data
);
}
export let myObject = {
  lvl: 0,
  balance: 10,
  exp: 0,
  equippedHair: 0,
  equippedFace: 0,
  equippedSkinColor: 0,
  top: {
    equipped: 0,
    owned: [0],
  },
  bottom: {
    equipped: 0,
    owned: [0],
  },
  shoes: {
    equipped: 0,
    owned: [0],
  },
  accessory: {
    equipped: 0,
    owned: [0],
  },
  garden: {
    equipped: [],
    owned: [],
  },
  decor: {
    equipped: [],
    owned: [],
  },
  background: {
    equipped: [],
    owned: [],
  },
  desk: {
    equipped: [],
    owned: [],
  },
  pets: {
    equipped: 0,
    owned: [0],
  },
  settings: {
    volume: 100,
    alarm: 'twinkle',
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 25,
    longBreakInterval: 4,
    waterReminderOn: false,
    waterReminderInterval: 30,
    stretchReminderOn: false,
    stretchReminderInterval: 30,
    eyeProtectionOn: false,
    eyeProtectionInterval: 60,
  },
  notepad: [
    //{
    //String item,
    //boolean isComplete
    //}
  ]};
export function setMyObject(newMyObject: any) {
  myObject = newMyObject.addressed;
}
export function BackEnd() {
  
  const myObject = {};

  
;
}

