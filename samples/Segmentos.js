import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';


import { Platform, PermissionsAndroid } from 'react-native';


import { Item, Segment, Input, TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

export default class Segmentos extends Component {

    
        render() {

          return (
            <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
         
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content >
        <Segment>
              <Button ><Text>Puppies</Text></Button>
              <Button ><Text>Cubs</Text></Button>
            </Segment>
        <Container style={{alignItems: 'center'}}>
        
         

              <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg'}}  style={{ width: 200, height: 200, borderRadius: 200/2}}  />
                <Text style={{textAlign: 'center'}}>
                 <H1>Bienvenido!</H1>
                </Text>
                </Container>
        </Content>
      </Container>

          );
          }
}
