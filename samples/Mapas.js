import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';


import { Platform, PermissionsAndroid } from 'react-native';


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

   async function requestAndroidLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Ubicacion',
          'message': 'Necesitamos saber donde estas en todo momento'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        var gps = navigator.geolocation.getCurrentPosition(
          function(pos) {
            Alert.alert('Coordenada GPS', 'latitud:' + pos.coords.latitude);
            Alert.alert('Coordenada GPS', 'longitud:'+ pos.coords.longitude);

        },
          function() {
            Alert.alert('Coordenada GPS', 'No pude recuperar tu ubicacion');
        }, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
      } else {
        Alert.alert('Permisos', 'No podras encontrar a tu media naranaja sin no nos compartes tu ubicacion');
      }
    } catch (err) {
      Alert.alert(err);
    }
  }

export default class Mapas extends Component {


  async componentWillMount() {
      if(Platform.OS === 'android')
        await requestAndroidLocationPermission();
    }

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
