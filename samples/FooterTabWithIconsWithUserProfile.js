oimport React, { Component } from 'react';
import { Container, Left, Thumbnail, Body, Title, Right, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
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
                    <Icon name='help' />
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
      Bienvenido!
      </Text>
      </Content>


      </Container>

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
            <Button vertical  >
              <Icon name="person" />
              <Text style={{fontSize: 8}}>Ajustes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
