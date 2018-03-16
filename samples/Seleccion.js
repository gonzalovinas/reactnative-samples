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
                  Tabs
                </Text>
              </Button>

              <Button block backgroundColor="red" onPress={()=> {
                                        this.props.navigation.navigate('TabWithIconsWithUserProfile');
                                      }}>
                <Text>
                  Tabs
                </Text>
              </Button>


              </Content>

            </Container>
  );
  }
}
