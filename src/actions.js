// Action Types
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const POST_USER = "POST_USER";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_USERS = "FILTER_USERS";

// Action Creators
export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

// For better clarity, we can make payload more clearly
// export const getUsersSuccess = (users) => ({
//   type: GET_USERS_SUCCESS,
//   payload: users
// });

export const postUser = (payload) => ({
  type: POST_USER,
  payload
});

export const postUserSuccess = (payload) => ({
  type: POST_USER_SUCCESS,
  payload
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload
});

export const deleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload
});

export const getFilteredUsers = (payload) => ({
  type: FILTER_USERS,
  payload
})