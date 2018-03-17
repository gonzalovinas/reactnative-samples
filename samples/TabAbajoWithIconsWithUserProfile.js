import React, { Component } from 'react';
import ConfigSample from './ConfigSample';

import { ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';
import Tab1 from './SomeTab';


export default class TabAbajoWithIconsWithUserProfile extends Component {

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

      <Tabs initialPage={0} tabBarPosition={'bottom'} >
        <Tab heading="Elemento 1">
          <Tab1 />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Content>
                <Text style={{textAlign: 'center'}}>
                 <H1>Elemnto 2</H1>
                </Text>
            </Content>
        </Tab>
      </Tabs>


      </Container>
    );
  }
};
