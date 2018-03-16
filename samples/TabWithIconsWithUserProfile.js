import React, { Component } from 'react';
import ConfigSample from './ConfigSample';

import { Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';


export default class TabWithIconsWithUserProfile extends Component {

  render() {
    return (
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
                  <Badge info>
                       <Text>2</Text>
                     </Badge>
                  </Button>
            </Right>
      </Header>

      <Tabs initialPage={0}>
        <Tab heading="Elemento 1">
          <Tab1 />
        </Tab>
        <Tab heading="Elemento 2">
          <Tab2 />
        </Tab>
      </Tabs>


      </Container>
    );
  }
};
