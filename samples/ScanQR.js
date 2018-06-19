import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';


import { Platform, PermissionsAndroid } from 'react-native';


import { Item, Segment, Input, TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

import {QRscanner} from 'react-native-qr-scanner';

export default class Segmentos extends Component {

    
        render() {

          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#000'
            }
          });

          return (
            <Container>
                  
                    <QRscanner hintText={"acerque su codigo QR"} flashMode={true}/>

            </Container>

          );
          }
}
