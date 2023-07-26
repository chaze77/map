import "./App.css";
import Map from "./components/Map/Map";
import TableRoad from "./components/Table/Table";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <TableRoad />
      <Map />
    </div>
  );
}

export default App;
