import React, { Component } from 'react';

import {
  Alert, View, StyleSheet,
} from 'react-native';


import { Platform, PermissionsAndroid } from 'react-native';


import { Item, Input, TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

export default class SearchList extends Component {

    
        render() {

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
          </Container>

          );
          }
}
