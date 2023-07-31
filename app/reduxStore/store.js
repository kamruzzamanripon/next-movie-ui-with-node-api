'use client';

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
import counterReducer from './features/counter/counterSlice';
import movieSliceReducer from "./features/movie/movieSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        movies: movieSliceReducer,
        conter: counterReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
})