import {API} from './useAPI';
import _ from 'lodash';
import {sortByAvailability, sortByCapacity} from '../utils/common';

const methods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'delete',
  PUT: 'PUT',
};

const GET_ROOMS_URL =
  'https://gist.githubusercontent.com/yuhong90/7ff8d4ebad6f759fcc10cc6abdda85cf/raw/463627e7d2c7ac31070ef409d29ed3439f7406f6/room-availability.json';

export interface Room {
  name: string;
  capacity: string;
  level: string;
  available: boolean;
}

const convertRoomsData = (data: any, timeslot: string) => {
  const convertedData = data.map(dr => {
    return {
      name: dr?.name,
      capacity: dr?.capacity,
      level: dr?.level,
      available: _.get(dr, ['availability', timeslot], '0') === '1',
    };
  });
  return convertedData;
};

export function getRoomsApi(params: {
  timeslot: string;
  sortBy?: 'capacity' | 'availability';
}): API<Room[]> {
  return {
    getData: async () => {
      const response = await fetch(`${GET_ROOMS_URL}`, {
        method: methods.GET,
      });

      const json = await response.json();
      const sortBy = params?.sortBy;
      
      let roomsData = json;

      if (sortBy === 'capacity') {
        roomsData = sortByCapacity(json);
      } else if (sortBy === 'availability') {
        roomsData = sortByAvailability(json);
      }

      const data = convertRoomsData(json, params.timeslot);
      if (params?.sortBy === 'capacity') {
      }
      return data;
    },
  };
}
