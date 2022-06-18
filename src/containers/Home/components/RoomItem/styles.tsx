import {StyleSheet} from 'react-native';
import {color} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.cloud,
  },
  availableText: {
    color: color.green
  },
  notAvailableText: {
    color: color.dust
  },
  capacityText: {
    textAlign:'right'
  }
});

export default styles;
