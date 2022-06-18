import React from 'react';
import {View} from 'react-native';
import {Button, Header} from '../../components';
import styles from './styles';
import {WebView} from 'react-native-webview';
import SendIntentAndroid from 'react-native-send-intent';

export const BookingDetails = ({navigation, route}: any) => {
  const bookingResult = route.params?.url;

  return (
    <View style={styles.container}>
      <Header title={'Book a Room'} onBack={() => navigation.goBack()} />
      <View style={styles.bodyWrapper}>
        <WebView
          originWhitelist={['http://*', 'https://*', 'intent://*']}
          source={{uri: 'https://qrgo.page.link/N3vzh'}}
          onShouldStartLoadWithRequest={request => {
            if (request.url.startsWith('intent:')) {
              SendIntentAndroid.openChromeIntent(request.url).then(
                wasOpened => {
                  if (wasOpened) navigation.goBack();
                },
              );
              return false;
            }
            return true;
          }}
        />
        <Button
          onPress={() => navigation.goBack()}
          preset="primary"
          text="Back to Home"
        />
      </View>
    </View>
  );
};
