// sagas/rootSaga.js
import { all } from "redux-saga/effects";
import trackSagas from "./trackSagas";

export default function* rootSaga() {
  yield all([trackSagas()]);
}
