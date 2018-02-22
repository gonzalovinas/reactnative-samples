import React, {  Component } from 'react';
import {
  Image,
  ScrollView
} from 'react-native'

import { Container, Grid, Col, Text,  Button, Icon, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class Login extends Component {
  render() {
    return (




        <ScrollView>
            <Container>
                <Content contentContainerStyle={{flex: 1}} >
                  <Grid style={{alignItems: 'center'}}>
                    <Col>
                      <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: 400, height: 800, alignItems:'center'}} source={{uri: 'http://www.aylinglobal.in/wp-content/uploads/2017/11/enterprise-logo-designing-services-1.png'}}/>
                        </Col>
                  </Grid>
                </Content>


              <Content style={{padding: 30}}>

                <Form>

                  <Item floatingLabel>

                    <Label>Usuario</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Contraseña</Label>
                    <Input />
                  </Item>

                </Form>

                <Content contentContainerStyle={{flex: 1}} style={{paddingTop: 40}}>
                  <Grid style={{alignItems: 'center'}}>
                    <Col>
                      <Button block backgroundColor="red" >
                        <Text>
                          Ingresar
                        </Text>
                      </Button>

                      <Button full transparent  >
                        <Text style={{color: 'gray'}}>
                          Olvide Mi Clave
                        </Text>
                      </Button>
                    </Col>

                  </Grid>
               </Content>

              </Content>

              </Container>

  </ScrollView>
    );
  }
}
