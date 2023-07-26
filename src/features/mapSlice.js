// src/features/mapSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeCoordinates: [
    [59.983762, 30.311365],
    [59.98442, 30.311414],
    [59.985265, 30.311652],
  ],

  selectedRoute: null,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setRouteCoordinates: (state, action) => {
      state.routeCoordinates = action.payload;
    },
    setSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { setRouteCoordinates, setSelectedRoute } = mapSlice.actions;
export default mapSlice.reducer;
