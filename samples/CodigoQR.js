import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import { TabContainer, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';

export default class CodigoQR extends Component {

render() {

  return (
      <Container>

        <QRCode
                  value="sample qr code code"
                  size={200}
                  bgColor='purple'
                  fgColor='white'/>

      </Container>
  );
  }
}
