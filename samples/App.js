/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



import FooterTabWithIcons from './FooterTabWithIcons';
import UserProfile from './UserProfile';
import FooterTabWithIconsWithUserProfile from './FooterTabWithIconsWithUserProfile';
import TabWithIconsWithUserProfile from './TabWithIconsWithUserProfile';
import TabAbajoWithIconsWithUserProfile from './TabAbajoWithIconsWithUserProfile';
import Login from './Login';
import Seleccion from './Seleccion';
import TarjetasPasantes from './TarjetasPasantes'
import CodigoQR from './CodigoQR'
import Mapas from './Mapas'
import SearchList from './SearchList'
import Segmentos from './Segmentos'
import ListaSwipe from './ListaSwipe'
import ScanQR from './ScanQR'
import PropagandasAdMob from './PropagandasAdMob'
import firebase from 'react-native-firebase';


import {
  StackNavigator,
} from 'react-navigation';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default  App = StackNavigator({
  FooterTabWithIconsWithUserProfile: {
    screen: FooterTabWithIconsWithUserProfile,
  },
  TabWithIconsWithUserProfile: {
    screen: TabWithIconsWithUserProfile,
  },
  TabAbajoWithIconsWithUserProfile: {
    screen: TabAbajoWithIconsWithUserProfile,
  },
  TarjetasPasantes: {
    screen: TarjetasPasantes,
  },
  SearchList: {
    screen: SearchList,
  },
  ListaSwipe: {
    screen: ListaSwipe,
  },

  Segmentos: {
    screen: Segmentos,
  },
  Mapas: {
    screen: Mapas,
  },
  CodigoQR: {
    screen: CodigoQR,
  },
  Login: {
    screen: Login,
  },
  PropagandasAdMob: {
    screen: PropagandasAdMob,
  },
  Seleccion: {
    screen: Seleccion,
  },
  ScanQR: {
    screen: ScanQR,
  }
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Login'
});

/*
export default class  App extends React.Component {
  render() {
    return (
      <Login/>
    )
  }
};*/

/*
export default class App extends Component<Props> {
  render() {
    return (
      //<ListIconExample/>
      //<FooterTabWithIcons/>
//   <FooterTabWithIconsWithUserProfile/>
    //  <UserProfile/>
 <Login/>


    );
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab: {
    backgroundColor: 'red'
  }
});
