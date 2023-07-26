// src/features/mapSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeCoordinates: [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
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
