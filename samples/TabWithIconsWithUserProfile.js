 import React, { Component } from 'react';


import getTheme from './native-base-theme/components';
import rojo from './native-base-theme/variables/rojo';


import { TabContainer, StyleProvider, ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';
import Tab1 from './SomeTab';
import TabTarjetas from './TabTarjetas'

export default class TabWithIconsWithUserProfile extends Component {

  render() {
    return (
      <StyleProvider style={getTheme(rojo)}>
      <Container>
      <Header hasTabs>
      <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
                  <Title>Empresa</Title>
            </Body>
            <Right>
                  <Button transparent>
                  <Icon style={{fontSize: 35}} name="phone" />
                  </Button>
                  <Button transparent>
                  <Icon style={{fontSize: 35, fontFamily: "FontAwesome"}} name="qrcode" />
                  </Button>
                  <Button transparent>
                  <Badge >
                       <Text>2</Text>
                     </Badge>
                  </Button>
            </Right>
      </Header>

      <Tabs renderTabBar={()=> <ScrollableTab />} initialPage={0}  >
        <Tab heading="Elemento 1">
          <Tab1 />
        </Tab>
        <Tab heading="Elemento 2">
            <Container>
                <Text style={{textAlign: 'center'}}>
                 <H1>Elemnto 2</H1>
                </Text>
            </Container>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="camera" /><Text>Elemento 3</Text></TabHeading>}>
            <Container>
                <Text style={{textAlign: 'center'}}>
                 <H1>Elemnto 3</H1>
                </Text>
            </Container>
        </Tab>
        <Tab heading="Elemento 4">
              <TabTarjetas />
        </Tab>

      </Tabs>


      </Container>
      </StyleProvider>
    );
  }
};
