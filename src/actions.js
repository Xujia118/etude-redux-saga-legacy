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

export const postUser = (userData) => ({
  type: POST_USER,
  payload: userData,
});

export const postUserSuccess = (newUser) => ({
  type: POST_USER_SUCCESS,
  payload: newUser,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});

export const getFilteredUsers = (filteredUsers) => ({
  type: FILTER_USERS,
  payload: filteredUsers
})