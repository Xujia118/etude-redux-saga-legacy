import {
  GET_USERS_SUCCESS,
  POST_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  FILTER_BY_GENDER,
} from "./actions";

const initialState = {
  originalUsers: [],
  filteredUsers: [],
};

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        originalUsers: action.payload,
        filteredUsers: action.payload,
      };
    }
    case POST_USER_SUCCESS: {
      return {
        ...state,
        originalUsers: [...state.originalUsers, action.payload], // Append the new user
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        originalUsers: state.originalUsers.filter(
          (user) => user.id !== action.payload
        ), // Remove the deleted user
      };
    }
    case FILTER_BY_GENDER: {
      return {
        ...state,
        filteredUsers: state.originalUsers.filter(
          (user) => action.payload === "" || user.gender === action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default myFirstReducer;
