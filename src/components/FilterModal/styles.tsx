import {StyleSheet} from 'react-native';
import {color} from '../../theme';
import metrics from '../../theme/metrics';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: color.transparent,
  },
  overlay: {
    flex: 1,
    backgroundColor: color.transparent,
  },
  container: {
    position: 'absolute',
    backgroundColor: color.white,
    paddingHorizontal: metrics.marginHorizontal,
    width: metrics.screenWidth,
    bottom: 0,
    height: '60%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'space-between',
    paddingBottom:20
  },
  horizonalBar: {
    backgroundColor: color.grey,
    borderRadius: 2,
    width: 50,
    height: 5,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  headerTitle: {
    textAlign: 'center',
    backgroundColor: color.transparent,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    width: '30%',
  },
  applyButton: {
    width: '67%',
  },
});

export default styles;
