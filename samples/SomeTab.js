import React, { Component } from 'react';
import ConfigSample from './ConfigSample';

import { TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

export default class SomeTab extends Component {

render() {

  return (
      <Container>
          <Text style={{textAlign: 'center'}}>
           <H1>Elemnto 1 (compartido)</H1>
          </Text>
      </Container>
  );
  }
}
