import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
        }}
      />
      <Tabs.Screen
        name="room"
        options={{
          title: 'Room',
        }}
      />
      <Tabs.Screen
        name="world"
        options={{
          title: 'World',
        }}
      />
      <Tabs.Screen
        name="petstore"
        options={{
          title: 'Pet',
        }}
      />
      <Tabs.Screen
        name="clothingoutlet"
        options={{
          title: 'clothing',
        }}
      />
      <Tabs.Screen
        name="itemshop"
        options={{
          title: 'items',
        }}
      />
    </Tabs>
  );
}
