import {
  SIGN_UP,
  SIGN_IN,
  IS_TOKEN,
  SIGN_OFF,
  LOAD_PARKINGS,
  HOME_DATA,
} from './types';

export const userData = (type, data) => {
  switch (type) {
    case SIGN_IN:
      return {
        type: SIGN_IN,
        payload: data,
      };
    case SIGN_UP:
      return {
        type: SIGN_UP,
        payload: data,
      };
    case IS_TOKEN:
      return {
        type: IS_TOKEN,
        payload: data,
      };
    case HOME_DATA:
      return {
        type: HOME_DATA,
        payload: data,
      };
    case SIGN_OFF:
      return {
        type: SIGN_OFF,
      };
    default: {
      return { type: 'NULL' };
    }
  };
};

export const parkingData = (type, data) => {
  switch (type) {
    case LOAD_PARKINGS:
      return {
        type: LOAD_PARKINGS,
        payload: data,
      };
    default: {
      return { type: 'NULL' };
    }
  }
};
