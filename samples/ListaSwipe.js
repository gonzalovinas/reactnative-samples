import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';

import { ListView, Platform, PermissionsAndroid } from 'react-native';

import { Spinner, ListItem, List, Item, Segment, Input, TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

//http://api.jsonbin.io/b/5b22467a4e1aee358ec7054d

export default class ListSwipe extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: null,
      loading: true
    };

    fetch('http://api.jsonbin.io/b/5b22467a4e1aee358ec7054d')
        .then((responseJson) => {
          this.setState({loading: false, listViewData: JSON.parse(responseJson._bodyText)});
        })
        .catch((error) => {
          console.error(error);
        });
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {

    if(this.state.loading) {

      return (
        <Container>
          <Content><Spinner color='blue' /><Text>Cargando...</Text></Content>
          </Container>
      );

    }
    else {

      return (
          <Container>
            <Header searchBar rounded>
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
                </Header>
            <Content>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={{ uri: data.img }} />
                    </Left>
                    <Body>
                      <Text>Apellido, Nombre </Text>
                      <Text note>GOLD | {data.id}| {data.edad} años</Text>
                    </Body>
                    <Right>
                      <Text note>Hoy</Text>
                    </Right>
                  </ListItem>
                  }
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle" />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
          </Container>
    
      );
    }
    

    
  }
}