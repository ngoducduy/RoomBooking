import {ViewStyle} from 'react-native';
import {color} from '../../theme';

const BASE: ViewStyle = {
  width: '100%',
  height: 50,
  borderRadius: 25,
  backgroundColor: color.blue,
  justifyContent: 'center',
  alignItems: 'center',
};
export const presets = {
  primary: BASE,
  secondary: {...BASE, backgroundColor: color.midNight} as ViewStyle,
};

export type TextPresets = keyof typeof presets;
