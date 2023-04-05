import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Car {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export const carApi = createApi({
    reducerPath: 'carApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test.tspb.su/test-task/vehicles',
    }),
    endpoints: (builder) => ({
        getCarsList: builder.query<Car[], string>({
            query: () => ``,
        }),
    }),
});

export const { useGetCarsListQuery } = carApi;
