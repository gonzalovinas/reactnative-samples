import React, { Component } from 'react';

import { Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabWithIconsWithUserProfile extends Component {
  render() {
    return (
      <Container>
      <Header>
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
      <Text></Text>
        <Text></Text>
          <Text></Text>
            <Text></Text>
              <Text></Text>
                <Text></Text>
                  <Text></Text>
                    <Text></Text>
                      <Text></Text>
                        <Text></Text>
                          <Text></Text>
                            <Text></Text>
                              <Text></Text>
                                <Text></Text>
                                  <Text></Text>
      <Container style={{alignItems: 'center'}}>
      <Content >
      <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg'}}  style={{ width: 200, height: 200, borderRadius: 200/2}}  />
      <Text style={{textAlign: 'center'}}>
      <H1>Bienvenida!</H1>
      </Text>
      </Content>


      </Container>

        <Footer>
          <FooterTab  >
            <Button vertical >
              <Icon name="apps" />
              <Text style={{fontSize: 8}}>Elemento 1</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text style={{fontSize: 8}}>Elemento 2</Text>
            </Button>
            <Button vertical  active badge>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text style={{fontSize: 8}}>Elemento 4</Text>
            </Button>
            <Button vertical >
              <Icon name="person" />
              <Text style={{fontSize: 8}}>Ajustes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};
