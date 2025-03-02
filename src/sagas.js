import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS,
  getUsersSuccess,
  POST_USER,
  postUserSuccess,
  DELETE_USER,
  deleteUserSuccess,
} from "./actions";
import { getUsers, addUser, deleteUser } from "./services";

// Fetch users saga
function* workGetUsers() {
  try {
    const response = yield call(getUsers); // Call the API
    const users = Object.values(response.data); // Transform the response into an array
    yield put(getUsersSuccess(users)); // Dispatch the success action with the users array
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Add user saga
function* workPostUser(action) {
  try {
    const response = yield call(addUser, action.payload); // Call the API
    const newUser = response.data; // Extract the new user from the response
    yield put(postUserSuccess(newUser)); // Dispatch the success action with the new user
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Delete user saga
function* workDeleteUser(action) {
  try {
    yield call(deleteUser, action.payload); // Call the API
    yield put(deleteUserSuccess(action.payload)); // Dispatch the success action with the userId
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Root saga
function* mySaga() {
  yield takeEvery(GET_USERS, workGetUsers);
  yield takeEvery(POST_USER, workPostUser);
  yield takeEvery(DELETE_USER, workDeleteUser);
}

export default mySaga;
