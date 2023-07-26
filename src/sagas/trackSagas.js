// sagas/mapSaga.js
import { takeLatest, call, put } from "redux-saga/effects";
import { setRouteCoordinates } from "../features/mapSlice";
import { requestRouteCoordinates } from "../HTTP-services/trackService";

function* fetchRouteCoordinates(action) {
  try {
    const { coordinates } = action.payload;
    // Отправляем запрос к API OSRM для получения данных маршрута по переданным координатам
    const response = yield call(requestRouteCoordinates, coordinates);
    // Извлекаем координаты маршрута из ответа
    const newCoordinates = response.routes[0].geometry.coordinates;
    // Отправляем полученные координаты в Redux store с помощью Redux Toolkit
    yield put(setRouteCoordinates(newCoordinates));
  } catch (error) {
    // Обрабатываем ошибку, если запрос не удался
    console.error("Error fetching route coordinates:", error);
  }
}

// Экспортируем Saga для подключения в корневую Saga
export default function* trackSagas() {
  yield takeLatest("map/fetchRouteCoordinates", fetchRouteCoordinates);
}
