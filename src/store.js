import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import myFirstReducer from "./reducer.js";
import mySaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({ myFirstReducer });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mySaga);

export default store;
