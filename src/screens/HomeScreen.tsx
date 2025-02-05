import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {FloatMenu} from '../components';
import {MenuItem, Transaction} from '../interfaces';
import transactionData from '../data/transactions.json';
import TransactionsSumary from '../features/TransactionsSumary.feature';

import {setTransactions as storeTransactions} from '../reducers/transactions.reducer';

const menuItems: MenuItem[] = [
  {
    text: 'Item 1',
    action: () => console.log('Item 1'),
    icon: (
      <Icon name="home-outline" size={30}>
        {' '}
      </Icon>
    ),
  },
  {
    text: 'Item 2',
    action: () => console.log('Item 2'),
    icon: (
      <Icon name="reader-outline" size={30}>
        {' '}
      </Icon>
    ),
  },
  {
    text: 'Item 3',
    action: () => console.log('Item 3'),
    icon: (
      <Icon name="add-outline" size={30}>
        {' '}
      </Icon>
    ),
  },
  {
    text: 'Item 4',
    action: () => console.log('Item 4'),
    icon: (
      <Icon name="pencil-outline" size={30}>
        {' '}
      </Icon>
    ),
  },

  {
    text: 'Item 5',
    action: () => console.log('Item 5'),
    icon: (
      <Icon name="settings-outline" size={30}>
        {' '}
      </Icon>
    ),
  },
];

export const HomeScreen = () => {
  const [transactions, setTransactions] = useState([] as Transaction[]);
  const dispatch = useDispatch();

  const fetchTransactions = useCallback(async () => {
    try {
      // const response = await fetch('https://api.example.com/transactions');
      // const data = await response.json();
      setTransactions(transactionData.transactions);
      dispatch(storeTransactions(transactionData.transactions));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <View style={{flex: 1}}>
      <TransactionsSumary />

      <FloatMenu menuItems={menuItems} />
    </View>
  );
};
