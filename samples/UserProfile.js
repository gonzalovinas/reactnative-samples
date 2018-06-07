import React, { Component } from 'react';
import { Container, Thumbnail, Left, Body, Image, Title, Right, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class UserProfile extends Component {
  render() {
    return (
      <Container >
      <Header>
            <Left>
              <Button transparent>
              <Icon name='menu' />
              </Button>
            </Left>
            <Body>
                  <Title>Perfil</Title>
            </Body>
            <Right>
                  <Button transparent>
                    <Icon name='camera' />
                  </Button>
            </Right>
      </Header>
        <Container style={{alignItems: 'center'}}>
        <Content >
        <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg'}}  style={{ width: 200, height: 200, borderRadius: 200/2}}  />
        </Content>
        </Container>

      </Container>
    );
  }
}
