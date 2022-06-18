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
    paddingBottom: 20
  },
});

export default styles;
