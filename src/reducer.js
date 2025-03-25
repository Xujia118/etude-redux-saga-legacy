import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  POST_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  FILTER_USERS,
} from "./actions";

const initialState = {
  originalUsers: [],
  filteredUsers: [],
  isLoading: false,
  error: null,
};

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        originalUsers: action.payload,
        filteredUsers: action.payload,
        isLoading: false,
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
