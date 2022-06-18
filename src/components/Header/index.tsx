import * as React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {IconButton} from '..';
import {color} from '../../theme';
import {Text} from '../Text';
import styles from './styles';

interface HeaderProps {
  title?: string;
  onBack?(): void;
  rightButton?: string;
  style?: StyleProp<ViewStyle>;
}

export function Header(props: HeaderProps) {
  const {title = 'header', style, onBack, ...rest} = props;

  return (
    <View style={[styles.headerContainer, style]} {...rest}>
      {onBack && (
        <IconButton
          iconName="angle-left"
          onPress={onBack}
          size={40}
          color={color.dark}
          style={styles.btnBack}
        />
      )}
      <Text preset={'bold'} style={styles.headerTitle}>
        {title}
      </Text>
    </View>
  );
}
