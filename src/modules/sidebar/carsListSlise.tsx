import { createSlice } from '@reduxjs/toolkit';
import { Car } from '../../Api';

interface SidebarState {
  carsList: Car[];
  isModal: boolean;
  carData: Car;
}

const initialState: SidebarState = {
  carsList: [],
  isModal: false,
  carData: {
    id: 0,
    name: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
    latitude: 0,
    longitude: 0,
  },
};

export const carsListSlice = createSlice({
  name: 'carsList',
  initialState,
  reducers: {
    add: (state, action) => {
      state.carsList = action.payload;
    },
    remove: (state, action) => {
      state.carsList = state.carsList.filter((c) => c.id !== action.payload);
    },
    closeModalWindow: (state) => {
      state.isModal = false;
    },
    getCarData: (state, action) => {
      state.isModal = true;
      state.carData = action.payload;
    },
    saveNewCarData: (state, action) => {
      state.carsList = state.carsList.map((car) => {
        if (car.id === action.payload.id) {
          return action.payload;
        } else {
          return car;
        }
      });
    },
    filterCarList: (state, action) => {
      console.log(action.payload);
      const result = state.carsList.sort(function (a, b) {
        switch (action.payload) {
          case 'price Up':
            return -(a.price - b.price);
          case 'price Low':
            return a.price - b.price;
          case 'year Up':
            return b.year - a.year;
          case 'year Low':
            return a.year - b.year;
          case 'all':
            return a.id - b.id;
          default:
            return 0;
        }
      });
      state.carsList = result;
    },
  },
});

export const { add, remove, closeModalWindow, getCarData, saveNewCarData, filterCarList } =
  carsListSlice.actions;

export default carsListSlice.reducer;
