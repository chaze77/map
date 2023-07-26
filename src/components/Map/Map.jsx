import React from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Map = () => {
  // Получаем координаты маршрута из Redux store с помощью useSelector
  const { routeCoordinates } = useSelector((state) => state.map);
  //   const routeCoordinates = routeCoordinatesData?.routeCoordinates; // Добавляем дополнительную проверку

  console.log("нукась", routeCoordinates);

  //
  const isValidCoordinates =
    Array.isArray(routeCoordinates) && routeCoordinates.length > 0;

  // Если routeCoordinates не является действительными координатами, установим position по умолчанию
  const position = isValidCoordinates
    ? routeCoordinates[0]
    : [
        [59.983762, 30.311365],
        [59.98442, 30.311414],
        [59.985265, 30.311652],
      ];

  console.log(isValidCoordinates);

  return (
    <div className={styles.container}>
      {/* Добавлен внутренний контейнер с классом mapContainer */}
      <div className={styles.mapContainer}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ width: "500px", height: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {/* Используем полученные координаты маршрута, если они действительны */}
          {isValidCoordinates && (
            <Polyline
              positions={routeCoordinates}
              pathOptions={{ color: "red" }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
