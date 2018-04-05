import React, {  Component } from 'react';
import {
  Image,
  ScrollView
} from 'react-native'

import { AppNavigator, Root, Container, Toast, Grid, Col, Text,  Button, Icon, Header, Content, Form, Item, Input, Label } from 'native-base';


var { FBLogin, FBLoginManager } = require('react-native-facebook-login');



export default class Login extends Component {
  render() {
      var _this = this;
    return (

<Root>
        <ScrollView>
            <Container>
                <Content contentContainerStyle={{flex: 1}} >
                  <Grid style={{alignItems: 'center'}}>
                    <Col>
                      <Image style={{ resizeMode: 'contain', alignSelf: 'center', width: 450, height: 800, alignItems:'center'}} source={{uri: 'http://www.aylinglobal.in/wp-content/uploads/2017/11/enterprise-logo-designing-services-1.png'}}/>
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
                      <Button block backgroundColor="red" onPress={()=> {
                                                this.props.navigation.navigate('Seleccion');
                                              }}>
                        <Text>
                          Ingresar
                        </Text>
                      </Button>

                      <Button full transparent  onPress={()=> {
                                                Toast.show({
                                                    text: 'Credenciales Incorrectas',
                                                    position: 'bottom',
                                                    type: 'danger',
                                                    buttonText: 'Aceptar',
                                                    duration: 10 * 1000
                                                  })}
                                                }>
                        <Text style={{color: 'gray'}}>
                          Olvide Mi Clave
                        </Text>
                      </Button>

                      <FBLogin 
                        ref={(fbLogin) => { this.fbLogin = fbLogin }}
                        permissions={["email","user_friends"]}
                        loginBehavior={FBLoginManager.LoginBehaviors.WebView}
                        onLogin={function(data){
                          console.log("Logged in!");
                          console.log(data);
                          _this.setState({ user : data.credentials });
                        }}
                        onLogout={function(){
                          console.log("Logged out.");
                          _this.setState({ user : null });
                        }}
                        onLoginFound={function(data){
                          console.log("Existing login found.");
                          console.log(data);
                          _this.setState({ user : data.credentials });
                        }}
                        onLoginNotFound={function(){
                          console.log("No user logged in.");
                          _this.setState({ user : null });
                        }}
                        onError={function(data){
                          console.log("ERROR");
                          console.log(data);
                        }}
                        onCancel={function(){
                          console.log("User cancelled.");
                        }}
                        onPermissionsMissing={function(data){
                          console.log("Check permissions!");
                          console.log(data);
                        }}
                      />


                    </Col>

                  </Grid>
               </Content>

              </Content>

              </Container>

  </ScrollView>
  </Root>
    );
  }
}
