import React, { Component } from 'react';
import { Title, Button, Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';


export default class ConfigSample extends Component {
  render() {
    return (

          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
    );
  }
}
