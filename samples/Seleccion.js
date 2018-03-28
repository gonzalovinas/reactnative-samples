import React, {  Component } from 'react';
import {
  Image,
  ScrollView
} from 'react-native'

import { AppNavigator, Root, Container, Toast, Grid, Col, Text,  Button, Icon, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class Seleccion extends Component {
  render() {
    return (
            <Container>
              <Content contentContainerStyle={{flex: 1}} >


              <Button block backgroundColor="green" onPress={()=> {
                                        this.props.navigation.navigate('FooterTabWithIconsWithUserProfile');
                                      }}>
                <Text>
                  Tabs iPhone (abajo)
                </Text>
              </Button>

              <Button block backgroundColor="red" onPress={()=> {
                                        this.props.navigation.navigate('TabWithIconsWithUserProfile');
                                      }}>
                <Text>
                  Tabs Android (arriba)
                </Text>
              </Button>

              <Button block backgroundColor="blue" onPress={()=> {
                                        this.props.navigation.navigate('TabAbajoWithIconsWithUserProfile');
                                      }}>
                <Text>
                  Tabs Android (abajo)
                </Text>
              </Button>

               <Button block backgroundColor="yellow" onPress={()=> {
                                        this.props.navigation.navigate('TarjetasPasantes');
                                      }}>
                <Text>
                  Tarjetas Pasantes
                </Text>
              </Button>

               <Button block backgroundColor="gray" onPress={()=> {
                                        this.props.navigation.navigate('PropagandasAdMob');
                                      }}>
                <Text>
                  Propagandas
                </Text>
              </Button>

              <Button block backgroundColor="lightblue" onPress={()=> {
                                       this.props.navigation.navigate('CodigoQR');
                                     }}>
               <Text>
                 QR Code
               </Text>
             </Button>



             <Button block backgroundColor="orange" onPress={()=> {
                                      this.props.navigation.navigate('IngresoFacebook');
                                    }}>
              <Text>
                Facebook Login
              </Text>
            </Button>


              </Content>

            </Container>
  );
  }
}
