import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';


import ListIconExample from './ListIconExample'



export default class App extends React.Component {
  render() {


    Expo.Font.loadAsync();

    return (
      <ListIconExample/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
