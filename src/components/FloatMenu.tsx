import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

import {MenuItem} from '../interfaces';

interface Props {
  menuItems: MenuItem[];
}

export const FloatMenu = ({menuItems}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const renderItem = ({item}: {item: MenuItem}) => (
    <Pressable onPress={item.action} style={style.optionsItem}>
      {item.icon}
    </Pressable>
  );

  const renderSeparator = () => <View style={style.itemSeparator} />;

  return (
    <View style={style.laucherMenuContainer}>
      <View style={style.optionsContainer}>
        {showMenu && (
          <FlatList
            data={menuItems}
            renderItem={renderItem}
            keyExtractor={item => item.text}
            horizontal={true}
            ItemSeparatorComponent={() => renderSeparator()}
          />
        )}

        <Pressable onPress={toggleMenu}>
          <Icon name="ellipsis-horizontal-circle" size={50} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  laucherMenuContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 16,
  },
  itemSeparator: {
    width: 1,
    backgroundColor: '#333333',
    height: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionsItem: {
    marginHorizontal: 10,
  },
});
