import React, { Component } from 'react';

import {
  View, Image,
  Platform, StyleSheet, ScrollView
} from 'react-native'


import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';


import { ScrollableTab, TabHeading, Badge, H1, Container, Left, Thumbnail, Body, Title, Right, Header, Content, Tabs, Tab,  Button, Icon, Text } from 'native-base';



const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'ios') ? 30 : 10,
  },
  example: {
    paddingVertical: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
  },
});



export default class PropagandasAdMob extends Component {

  constructor(){
    super();
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

    AdMobInterstitial.addEventListener('adLoaded',
      () => console.log('AdMobInterstitial adLoaded')
    );
    AdMobInterstitial.addEventListener('adFailedToLoad',
      (error) => console.warn(error)
    );
    AdMobInterstitial.addEventListener('adOpened',
      () => console.log('AdMobInterstitial => adOpened')
    );
    AdMobInterstitial.addEventListener('adClosed',
      () => {
        console.log('AdMobInterstitial => adClosed');
        AdMobInterstitial.requestAd().catch(error => console.warn(error));
      }
    );
    AdMobInterstitial.addEventListener('adLeftApplication',
      () => console.log('AdMobInterstitial => adLeftApplication')
    );

    AdMobInterstitial.requestAd().catch(error => console.warn(error));

  }

  render() {
    return (

 <Container>
        
        <AdMobBanner
              adSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />

          <PublisherBanner
            adSize="Rewarded"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[PublisherBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
            onAppEvent={event => console.log(event.name, event.info)}
          />

            <Button block backgroundColor="blue" onPress={()=> {
                                         AdMobInterstitial.showAd().catch(error => console.warn(error));

                                      }}>
                <Text>
                  Mostrar Interstitial
                </Text>
              </Button>

        </Container>

    );
}

 

};
