import React, { Component } from 'react';
import { Container, Left, Body, Title, Right, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabWithIcons extends Component {
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
                    <Icon name='help' />
                  </Button>
            </Right>
      </Header>
        <Content />
        <Footer>
          <FooterTab >
            <Button vertical>
              <Icon name="apps" />
              <Text style={{fontSize: 8}}>Elemento 1</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text style={{fontSize: 8}}>Elemento 2</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text style={{fontSize: 8}}>Elemento 3</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text style={{fontSize: 8}}>Ajustes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
