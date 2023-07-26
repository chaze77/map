import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoute } from "../../features/mapSlice";
import { routes } from "./trackData";
import styles from "./style.module.scss";

const TableRoad = () => {
  const dispatch = useDispatch();

  const handleRouteClick = async (record) => {
    try {
      // Извлекаем значения свойств point1, point2 и point3 и удаляем пробелы из строк
      const point1 = record.point1.replace(/[()]/g, "").replace(/\s/g, "");
      const point2 = record.point2.replace(/[()]/g, "").replace(/\s/g, "");
      const point3 = record.point3.replace(/[()]/g, "").replace(/\s/g, "");

      // Формируем строку с координатами в нужном формате, разделяя их символом ";"
      const coordinates = `${point1};${point2};${point3}`;

      // Отправляем действие для выполнения саги fetchRouteCoordinates
      dispatch({
        type: "map/fetchRouteCoordinates",
        payload: { coordinates },
      });

      // Обновляем Redux store с выбранным маршрутом
      dispatch(setSelectedRoute(record.title));
    } catch (error) {
      console.error("Error fetching route coordinates:", error);
    }
  };

  const columns = [
    {
      title: "Маршрут",
      dataIndex: "title",
      key: "title",
    },
    ...routes[0].coordinates.map((item, index) => ({
      title: `Точка ${index + 1}`,
      dataIndex: `point${index + 1}`,
      key: `point${index + 1}`,
    })),
  ];

  const data = routes.map((route, index) => {
    const rowData = {
      key: index,
      title: route.title,
    };
    route.coordinates.forEach((coord, coordIndex) => {
      rowData[`point${coordIndex + 1}`] = `(${coord[0]}, ${coord[1]})`;
    });
    return rowData;
  });

  return (
    <div>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record, rowIndex) => ({
          onClick: () => handleRouteClick(record),
        })}
      />
    </div>
  );
};

export default TableRoad;
