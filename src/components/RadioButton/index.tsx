import * as React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Icon, IconButton} from '..';
import {color} from '../../theme';
import {Text} from '../Text';
import styles from './styles';

interface RadioButtonProps {
  label?: string;
  value: boolean;
  onSelected?(): void;
  style?: StyleProp<ViewStyle>;
}

export function RadioButton(props: RadioButtonProps) {
  const {label = 'label', value, onSelected, style, ...rest} = props;

  return (
    <TouchableOpacity
      onPress={onSelected}
      style={[styles.container, style]}
      {...rest}>
      <Text preset="radioButton">{label}</Text>
      {value ? (
        <Icon name={'check-circle'} size={25} color={color.dark} />
      ) : (
        <Icon name={'circle'} size={25} color={color.grey} />
      )}
    </TouchableOpacity>
  );
}
