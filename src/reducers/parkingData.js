import { LOAD_PARKINGS } from 'actions/types';

const initialState = {
  parkings: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PARKINGS:
      return { parkings: [...action.payload] };
    default:
      return state;
  }
};

export default userReducer;
