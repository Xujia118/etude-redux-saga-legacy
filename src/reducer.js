import {
  GET_USERS_SUCCESS,
  POST_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from "./actions";

const initialState = {
  users: [],
};

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return { ...state, users: action.payload };
    }
    case POST_USER_SUCCESS: {
      return {
        ...state,
        users: [...state.users, action.payload], // Append the new user
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload), // Remove the deleted user
      };
    }
    default:
      return state;
  }
};

export default myFirstReducer;
