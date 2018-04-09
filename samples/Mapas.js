import React, { Component } from 'react';

import {
  View, StyleSheet,
} from 'react-native';


import { TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

import MapView from 'react-native-maps';


  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  var gps = navigator.geolocation.getCurrentPosition(
    function(pos) {
      alert(pos.coords.latitude);
      alert(pos.coords.longitude);
  },
    function() {
        alert('error al recuperar GPS');
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });


export default class Mapas extends Component {


render() {

  return (
    <View style ={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
  );
  }
}
