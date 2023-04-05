import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { add } from './modules/sidebar/carsListSlise';

export const rtkMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (action.type === 'carApi/executeQuery/fulfilled') {
    api.dispatch(add(action.payload));
  }
  return next(action);
};
