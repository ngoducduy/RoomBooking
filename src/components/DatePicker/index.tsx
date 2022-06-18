import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Text} from '../Text';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import styles from './styles';
import {isEmpty} from 'lodash';
import {color} from '../../theme';

interface DatPickerProps {
  title?: string;
  onChangeDate?: (date: Date) => void;
  style?: StyleProp<ViewStyle>;
  error?: string;
  mode?: 'date' | 'time' | 'datetime';
  label?: string;
  selectedDate: Date;
}

export function DatePicker(props: DatPickerProps) {
  const {mode = 'date', label='Date', selectedDate, onChangeDate, style, error} = props;

  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(selectedDate);
  },[selectedDate]);

  const showDateTimePicker = () => {
    setModalVisible(true);
  };

  const hideDateTimePicker = () => {
    setModalVisible(false);
  };

  const handleDatePicked = date => {
    setDate(date);
    onChangeDate && onChangeDate(date);
    hideDateTimePicker();
  };

  return (
    <>
      <View style={style}>
        <TouchableOpacity
          style={[
            styles.datePickerInput,
            {borderBottomColor: error ? color.fire : color.dust},
          ]}
          onPress={showDateTimePicker}>
          <View style={styles.labelText}>
            {label && <Text style={styles.labelText}>{label}</Text>}
            <Text>
              {mode === 'time'
                ? date
                  ? moment(date).format('hh:mm A')
                  : ''
                : date
                ? moment(date).format('DD/MM/YYYY')
                : ''}
            </Text>
          </View>
        </TouchableOpacity>
        {!isEmpty(error) ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <DateTimePickerModal
        isVisible={isModalVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
        mode={mode}
        minuteInterval={30}
        date={date}
      />
    </>
  );
}
