import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { store } from './store';

import MainScreen from './containers/main';
import PhotosScreen from './containers/photos';

const App = StackNavigator(
  {
    Main: {screen: MainScreen, path: '/'},
    Photos: {screen: PhotosScreen, path: '/photos'},
  },
  {
    header: navigation => ({
      titleStyle: {
        color: 'red'
      },
      tintColor: '#0087B7'
    }),
  }
)

const screenProps = {
  store
}

export default () => (
  <App screenProps={screenProps} />
);
