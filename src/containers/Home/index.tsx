import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import {getRoomsApi} from '../../api/getRoomsApi';
import {useAPI} from '../../api/useAPI';
import {Header, IconButton, FilterModal, DatePicker} from '../../components';
import {color} from '../../theme';
import {roundTime} from '../../utils/common';
import {RoomList} from './components/RoomList';
import styles from './styles';

export const Home = ({navigation, route}: any) => {
  const [date, setDate] = useState(new Date());
  const [time, setTimeslot] = useState(roundTime(new Date()));
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [sortingBy, setSortingBy] = useState(null);

  const api = useAPI(() =>
    getRoomsApi({timeslot: moment(time).format('HH:mm'), sortBy: sortingBy}),
  );

  useEffect(() => {
    api.request();
  }, [time, sortingBy]);

  const _handleChangeDate = (date: Date) => {
    setDate(date);
  };

  const _handleChangeTimeslot = (time: Date) => {
    setTimeslot(time);
  };

  const onScan = () => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.CAMERA)
        .then(result => {
          console.log(result);
          navigation.navigate('qrScanner');
        })
        .catch(error => console.log(error));
    } else {
      navigation.navigate('qrScanner');
    }
  };

  const handleApplySort = sortBy => {
    setSortingBy(sortBy);
  };

  const toggleFilter = () => {
    setVisibleFilter(!visibleFilter);
  };

  return (
    <View style={styles.container}>
      <Header title="Book a Room" />
      <IconButton
        style={styles.scannerButton}
        iconName="camera"
        onPress={onScan}
        color={color.dark}
      />
      <View style={styles.bodyWrapper}>
        <DatePicker
          selectedDate={date}
          label="Date"
          mode="date"
          onChangeDate={_handleChangeDate}
        />
        <DatePicker
          selectedDate={time}
          label="Timeslot"
          mode="time"
          onChangeDate={_handleChangeTimeslot}
        />
        <RoomList data={api.data} toggleFilter={toggleFilter} />
      </View>
      <FilterModal
        sortingBy={sortingBy}
        visible={visibleFilter}
        onClose={toggleFilter}
        onApply={handleApplySort}
      />
    </View>
  );
};
