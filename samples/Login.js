import React, { Image,  Component } from 'react';
import { Container, Grid, Col, Text,  Button, Icon, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>

        <Content>


          <Form>

            <Item floatingLabel>

              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

          </Form>

          <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
            <Grid style={{alignItems: 'center'}}>
              <Col>
                <Button block rounded >
                  <Text>
                    Ingresar
                  </Text>
                </Button>
              </Col>
            </Grid>
         </Content>

        </Content>
      </Container>
    );
  }
}
