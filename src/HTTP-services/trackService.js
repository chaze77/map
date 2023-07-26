// services/tracksService.js
import axios from "axios";

const API_BASE_URL = "http://router.project-osrm.org/route/v1";

// Функция для выполнения запроса к API OSRM и получения данных маршрута
export const requestRouteCoordinates = async (coordinates) => {
  try {
    const alternatives = true; // Включаем альтернативные маршруты
    const steps = false; // Запрашиваем подробные шаги маршрута
    const geometries = "geojson"; // Формат геометрии маршрута
    const overview = "simplified"; // Уровень обзора маршрута
    const annotations = false; // Отключаем аннотации

    console.log(coordinates);
    const url = `${API_BASE_URL}/driving/${coordinates}?alternatives=${alternatives}&steps=${steps}&geometries=${geometries}&overview=${overview}&annotations=${annotations}`;
    console.log("url", url);
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
