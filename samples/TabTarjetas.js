import React, { Component } from 'react';

import {
  Image,
  ScrollView
} from 'react-native'

import { Card, CardItem, ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

export default class TabTarjetas extends Component {

  render() {
    return (
      <Container>
      <ScrollView>
      <Card>
            <CardItem>
              <Body>
                <Text>
                   Texto de Tarjeta
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
         <Card>
          <CardItem>
            <Icon active name="logo-googleplus" />
            <Text>Google Plus</Text>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
           </CardItem>
         </Card>


         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={{uri: 'Image URL'}} />
               <Body>
                 <Text>NativeBase</Text>
                 <Text note>GeekyAnts</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
           </CardItem>
           <CardItem>
             <Left>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               </Button>
             </Left>
             <Body>
               <Button transparent>
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
               </Button>
             </Body>
             <Right>
               <Text>11h ago</Text>
             </Right>
           </CardItem>
         </Card>
          </ScrollView>
      </Container>
    );
  }
};
