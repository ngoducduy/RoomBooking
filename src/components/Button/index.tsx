import * as React from 'react';
import {
  StyleProp,
  TouchableOpacityProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {presets, TextPresets} from './presets';
import {Text} from '..';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
}

export function Button(props: ButtonProps) {
  // grab the props
  const {
    text = 'button',
    preset = 'primary',
    style: styleOverride,
    ...rest
  } = props;

  const style = presets[preset] || presets.primary;
  const styles = [style, styleOverride];

  return (
    <TouchableOpacity style={styles} {...rest}>
      <Text preset='button'>{text}</Text>
    </TouchableOpacity>
  );
}
