// sagas/rootSaga.js
import { all } from "redux-saga/effects";
import trackSagas from "./trackSagas"; // Import the default export from mapSaga.js

export default function* rootSaga() {
  // Combine multiple sagas here using the all() effect
  yield all([
    trackSagas(), // Add your mapSaga here
    // Add other sagas here if you have any
  ]);
}
