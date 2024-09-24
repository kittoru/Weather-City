import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { reducer as cityReducer } from './city.module.slice/citySlice.js';
import { reducer as weatherReducer } from './weather.module.slice/weatherSlice.js';


export const store = configureStore({
  reducer: {
  weather: weatherReducer,
  }
})