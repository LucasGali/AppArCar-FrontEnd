import { SIGN_IN, SIGN_UP, IS_TOKEN, SIGN_OFF, HOME_DATA } from 'actions/types';

const initialState = {
  token: undefined,  
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  number: '',
  expiry: '',
  brand: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      localStorage.jwt = action.payload.token;
      localStorage.email = action.payload.email;
      return { ...state, ...action.payload };
    case SIGN_IN:
      localStorage.jwt = action.payload.token;
      localStorage.email = action.payload.email;
      return { ...state, ...action.payload };
    case IS_TOKEN:
      return { ...state, ...action.payload };
    case HOME_DATA:
      return { ...state, ...action.payload };
    case SIGN_OFF:
      return { initialState };
    default:
      return state;
  }
};


export default userReducer;
