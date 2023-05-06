import { UPDATE_LOGIN_STATUS } from "./store";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
