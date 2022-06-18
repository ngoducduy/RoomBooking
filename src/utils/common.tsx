import { Dimensions, Platform } from 'react-native'
import * as _ from 'lodash'

export const checkAvailability = function (availability: any) {
  return Object.values(availability).reduce((a, b) => Number(a) + Number(b), 0);
}

export const sortByAvailability = function (rooms: any) {
  return rooms.sort((a, b) => Number(checkAvailability(b?.availability)) - Number(checkAvailability(a?.availability)));
}

export const sortByCapacity = function (rooms: any) {
  return rooms.sort((a, b) => Number(b?.capacity) - Number(a?.capacity));
}

export const roundTime = function (date: Date) {
  const minutes = date.getMinutes();
  const roundedMinutes = (Math.round(minutes/30) * 30) % 60;
  const roundedDateTime = date.setMinutes(roundedMinutes);
  return new Date(roundedDateTime);
}

export function isIphoneX () {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  )
}