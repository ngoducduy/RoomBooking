import {StyleSheet} from 'react-native';
import {color} from '../../theme';
import metrics from '../../theme/metrics';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: color.white,
    height: metrics.navBarHeight,
    width: metrics.screenWidth,
    paddingTop: metrics.navBarPaddingTop,
    justifyContent: 'center',
    paddingHorizontal: metrics.marginHorizontal,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: color.transparent,
    paddingTop: 10
  },
  btnBack: {
    zIndex:99,
    marginTop:15
  },
});

export default styles;
