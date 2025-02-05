import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import React from 'react';

import {HomeScreen} from './src/screens/HomeScreen';
import store from './src/store/fintrack.store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};
