import React, { Component } from 'react';

import {
  Image,
  ScrollView
} from 'react-native'

import { DeckSwiper, Cards, Card, CardItem, ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    //image: require('./img/swiper-1.png')
  },
  {
    text: 'Card Two',
    name: 'Two',
  //  image: require('./img/swiper-2.png')
  }
  
];

export default class TabTarjetas extends Component {

 

  render() {
    return (
      <Container>
      
<DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />


      </Container>
    );
  }
};
