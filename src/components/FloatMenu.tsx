import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

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
    <Pressable onPress={item.action} style={style.menuItem}>
      <Text style={style.menuItemText}>{item.text}</Text>
    </Pressable>
  );

  const renderSeparator = () => <View style={style.itemSeparator} />;

  return (
    <View style={style.laucherMenuContainer}>
      {showMenu && (
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={item => item.text}
          style={style.laucherMenuItemContainer}
          horizontal={true}
          ItemSeparatorComponent={() => renderSeparator()}
        />
      )}

      <Pressable onPress={toggleMenu} style={style.laucherMenu}>
        <Text style={style.laucherMenuText}>{'+'}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  laucherMenuContainer: {
    alignItems: 'flex-end', // Alinea los elementos al final (derecha)
    flexDirection: 'row', // Coloca los elementos en fila
    alignSelf: 'flex-end', // Alinea el contenedor al final (derecha)
    height: '97%',
    padding: 10,
  },
  laucherMenu: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  laucherMenuItemContainer: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  menuItem: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
  },
  laucherMenuText: {
    color: 'white',
    fontSize: 30,
  },
  itemSeparator: {
    width: 10,
  },
});
