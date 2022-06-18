import {StyleSheet} from 'react-native';
import {color} from '../../theme';
import metrics from '../../theme/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  bodyWrapper: {
    flex: 1,
    paddingHorizontal: metrics.marginHorizontal,
  },
  scannerButton: {
    position: 'absolute',
    top: 25,
    right: 0,
    width: 40,
    height: 40,
  },
});

export default styles;
