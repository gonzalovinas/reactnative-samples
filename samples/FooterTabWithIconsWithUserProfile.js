import React, { Component } from 'react';

import { Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabWithIconsWithUserProfile extends Component {

  constructor() {
    super();
    this.state = {selectedTab: null};
  }

  renderSelectedTab () {
    switch(this.state.selectedTab) {
        case 'elemento1':
          return (
             <Content>
                 <Text style={{textAlign: 'center'}}>
                  <H1>Elemnto 1</H1>
                 </Text>
             </Content>
         );

       case 'elemento2':
         return (
            <Content>
                <Text style={{textAlign: 'center'}}>
                 <H1>Elemnto 2</H1>
                </Text>
            </Content>
        );

      case 'elemento3':
        return (
           <Content>
               <Text style={{textAlign: 'center'}}>
                <H1>Elemnto 3</H1>
               </Text>
           </Content>
       );

     case 'elemento4':
       return (
          <Content>
              <Text style={{textAlign: 'center'}}>
               <H1>Elemnto 4</H1>
              </Text>
          </Content>
      );

    default:
         return (
            <Content>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg'}}  style={{ width: 200, height: 200, borderRadius: 200/2}}  />
                <Text style={{textAlign: 'center'}}>
                 <H1>Bienvenido!</H1>
                </Text>
            </Content>
        );
    }
  }

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

      <Container style={{alignItems: 'center'}}>

          {this.renderSelectedTab()}

      </Container>
        <Footer>
          <FooterTab  >
            <Button vertical active={this.state.selectedTab==='elemento1'} onPress={() => this.setState({selectedTab: 'elemento1'})}>
              <Icon name="apps" />
              <Text style={{fontSize: 8}}>Elemento 1</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='elemento2'} onPress={() => this.setState({selectedTab: 'elemento2'})}>
              <Icon name="camera" />
              <Text style={{fontSize: 8}}>Elemento 2</Text>
            </Button>
            <Button vertical badge active={this.state.selectedTab==='elemento3'} onPress={() => this.setState({selectedTab: 'elemento3'})}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text style={{fontSize: 8}}>Elemento 3</Text>
            </Button>
            <Button vertical active={this.state.selectedTab==='elemento4'} onPress={() => this.setState({selectedTab: 'elemento4'})}>
              <Icon name="person" />
              <Text style={{fontSize: 8}}>Ajustes</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};
