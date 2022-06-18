import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Linking, View} from 'react-native';
import {getRoomsApi} from '../../api/getRoomsApi';
import {useAPI} from '../../api/useAPI';
import {Header} from '../../components';
import {DatePicker} from '../../components/DatePicker';
import styles from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export const QRScanner = ({navigation, route}: any) => {
  const onSuccess = e => {
    navigation.goBack();
    navigation.navigate('bookingDetails', {url: e.data});
  };

  return (
    <View style={styles.container}>
      <Header title="Scan code" onBack={() => navigation.goBack()} />
      <View style={styles.bodyWrapper}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </View>
    </View>
  );
};
