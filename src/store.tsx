import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './modules/sidebar/sidebarSlice';
import { carApi } from './Api';
import { setupListeners } from '@reduxjs/toolkit/query';
import carsListSlice from './modules/sidebar/carsListSlise';
import { rtkMiddleware } from './Middleware';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    carsList: carsListSlice,
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware, rtkMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
