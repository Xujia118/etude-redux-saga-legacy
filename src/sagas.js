import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, getUsersSucess } from "./actions.js";

async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
}

function* workGetUsersFetch() {
  const users = yield call(getUsers);
  yield put(getUsersSucess(users));
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;
