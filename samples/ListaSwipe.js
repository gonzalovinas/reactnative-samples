import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';

import { ListView, Platform, PermissionsAndroid } from 'react-native';

import { ListItem, List, Item, Segment, Input, TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

const datas = [
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg', id: '30-23476231-34', edad: 34 },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/AdamWestCCJul2011.jpg/220px-AdamWestCCJul2011.jpg', id: '30-23565345-34', edad: 14 },
  { img: 'https://cdn.thegentlemansjournal.com/wp-content/uploads/2014/11/stylish-actor-TGJ.00-900x600-c-center.jpg', id: '30-12323345-34', edad: 64 },
  { img: 'https://pbs.twimg.com/profile_images/447452537525125121/GAXxkSMO_400x400.jpeg', id: '30-23425345-34', edad: 34 },
  { img: 'https://media.wmagazine.com/photos/591c8330e8304275ecbfecbf/master/h_600,c_limit/2007.jpg', id: '30-2334345-34', edad: 67 }
];

export default class ListSwipe extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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