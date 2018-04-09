import React, { Component } from 'react';

import {
  Image,
  ScrollView
} from 'react-native'


import {
  View, StyleSheet,
} from 'react-native';


import { DeckSwiper, Cards, Card, CardItem, ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

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

  import MapView from 'react-native-maps';


const cards = [
  {
    text: 'Rocky',
    name: 'One',
    //image: require('./img/swiper-1.png')
  },
  {
    text: 'Lui',
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
                    
                    </Body>
                  </Left>
                  <Thumbnail source={require('./dog.jpg')}  style={{ width: 200, height: 200, borderRadius: 200/2}}  />

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
