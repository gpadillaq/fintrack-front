import React from 'react';
import {Text, View} from 'react-native';
import {FloatMenu} from '../components/FloatMenu';
import {MenuItem} from '../interfaces';

const menuItems: MenuItem[] = [
  {text: 'Item 1', action: () => console.log('Item 1')},
  {text: 'Item 2', action: () => console.log('Item 2')},
];

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Page</Text>

      <FloatMenu menuItems={menuItems} />
    </View>
  );
};
