import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import IconAwesome from 'react-native-vector-icons/dist/FontAwesome';

interface IconProps {
  name: string;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}

export function Icon(props: IconProps) {
  const {name, size = 20, color = '#900', style} = props;

  return (
    <View style={style}>
      <IconAwesome name={name} size={size} color={color} solid />
    </View>
  );
}
