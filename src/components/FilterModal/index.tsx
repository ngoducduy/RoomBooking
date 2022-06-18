import * as React from 'react';
import {
  Modal,
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {Button, IconButton, RadioButton} from '..';
import {color} from '../../theme';
import {Text} from '../Text';
import styles from './styles';

interface FilterModalProps {
  visible: boolean;
  onClose?(): void;
  onApply?(sortBy: 'location' | 'capacity' | 'availability' | null): void;
  style?: StyleProp<ViewStyle>;
  sortingBy?: 'location' | 'capacity' | 'availability' | null;
}

export function FilterModal(props: FilterModalProps) {
  const {sortingBy, visible, onClose, onApply, style, ...rest} = props;
  const [sortBy, setSortBy] = React.useState(null);

  React.useEffect(() => setSortBy(sortingBy), [sortingBy]);

  const handleApply = () => {
    onApply(sortBy);
    onClose();
  };

  const handleReset = () => {
    setSortBy(null);
    onClose();
  };

  const handleClose = () => {
    setSortBy(sortingBy);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      style={styles.modal}
      visible={visible}
      transparent>
      <TouchableOpacity
        onPress={handleClose}
        style={styles.overlay}
        activeOpacity={1}
      />
      <View style={styles.container}>
        <View>
          <View style={styles.horizonalBar} />
          <Text preset={'bold'} style={styles.headerTitle}>
            Sort
          </Text>
          <RadioButton
            onSelected={() => setSortBy('location')}
            label="Location"
            value={sortBy === 'location'}
          />
          <RadioButton
            onSelected={() => setSortBy('capacity')}
            label="Capacity"
            value={sortBy === 'capacity'}
          />
          <RadioButton
            onSelected={() => setSortBy('availability')}
            label="Availability"
            value={sortBy === 'availability'}
          />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            onPress={handleReset}
            preset="secondary"
            text="Reset"
            style={styles.resetButton}
          />
          <Button
            onPress={handleApply}
            text="Apply"
            style={styles.applyButton}
          />
        </View>
      </View>
    </Modal>
  );
}
