import { GET_USERS_SUCCESS } from "./actions";

const initialState = {
  users: [],
};

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};

export default myFirstReducer;
