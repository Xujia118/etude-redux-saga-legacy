import {
  GET_USERS_SUCCESS,
  POST_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  FILTER_USERS,
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
        filteredUsers: [...state.filteredUsers, action.payload],
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        originalUsers: state.originalUsers.filter(
          (user) => user.id !== action.payload
        ), // Remove the deleted user
        filteredUsers: state.filteredUsers.filter(
          (user) => user.id !== action.payload
        ),
      };
    }
    case FILTER_USERS: {
      return {
        ...state,
        filteredUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default myFirstReducer;
