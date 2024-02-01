import { configureStore } from "@reduxjs/toolkit";
import { nasaApi } from "./nasaApi";

export const store = configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nasaApi.middleware),
});