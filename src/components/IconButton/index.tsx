import * as React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {Icon} from '../Icon';
import {Text} from '../Text';
import styles from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  label?: string;
  iconName?: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function IconButton(props: IconButtonProps) {
  const {label, iconName, size = 20, color, style, ...rest} = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <View style={styles.wrapper}>
        {label && (
          <Text preset={'bold'} style={styles.label}>
            {label}
          </Text>
        )}
        <Icon name={iconName} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}
