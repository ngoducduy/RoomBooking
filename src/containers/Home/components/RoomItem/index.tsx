import * as React from 'react';
import {StyleProp, FlatList, View, ViewStyle} from 'react-native';
import {Text} from '../../../../components';
import styles from './styles';

interface RoomItemProps {
  data?: any;
}

export function RoomItem(props: RoomItemProps) {
  const {data} = props;

  const _renderAvailableStatus = (isAvailable: boolean) => {
    if (isAvailable) {
      return (
        <Text preset="italic" style={styles.availableText}>
          Available
        </Text>
      );
    } else {
      return <Text preset="italic" style={styles.notAvailableText}>Not Available</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text preset="bold">{data?.name}</Text>
        <Text>Level {data?.level}</Text>
      </View>
      <View>
        {_renderAvailableStatus(data?.available)}
        <Text style={styles.capacityText}>{data?.capacity} Pax</Text>
      </View>
    </View>
  );
}
