import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const APIkeyWeather = 'f523a782bb7287e770b332bfbbe3a083';
const APIkeyCity = '66d085d179add443716422kre558fb7';

export const fetchCity = createAsyncThunk('weather/fetchCity', async (city, {thunkAPI, dispatch}) => {
  try {
    const res = await axios(` https://geocode.maps.co/search?q=${city}&api_key=${APIkeyCity}&limit=1`);
    const coord = {
      lat: res.data[0].lat,
      lon: res.data[0].lon,
    }
    dispatch(fetchWeather(coord));
    return coord;
  } catch(err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async ({lat, lon}, thunkAPI) => {
  try {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeyWeather}&units=metric`);

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: {
      
    },
    isLoading: false,
    status: '',
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchCity.fulfilled, (state, { payload }) => {
    //   state.data.coord.lat = payload.lat;
    //   state.data.coord.lon = payload.lon;
    // });
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = false;
    })
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      
      const info = {
      name: payload.name,
      main: {
        temp: Math.round(payload.main.temp),
        feels: Math.round(payload.main.feels_like),
        min: Math.round(payload.main.temp_min),
        max: Math.round(payload.main.temp_max),
        icon: payload.weather[0].icon,
        type: payload.weather[0].main,
        description: payload.weather[0].description,
      },
      sub: {
        windSpeed: Math.round(payload.wind.speed),
        windDeg: Math.round(payload.wind.deg),
        pressure: Math.round(payload.main.pressure),
        humidity: Math.round(payload.main.humidity),
      },
     };
     state.data = info;
     state.isLoading = true;
     state.status = 'OK'
     console.log(state.data)
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const {actions, reducer} = weatherSlice;