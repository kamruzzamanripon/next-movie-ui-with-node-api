'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const authData = JSON.parse(localStorage.getItem("auth"));
// const localStorageToken = authData?.accessToken;

// Wrap the localStorage access in a client-side check
let localStorageToken = "";
if (typeof window !== 'undefined') {
    const authData = JSON.parse(localStorage.getItem("auth"));
    localStorageToken = authData?.accessToken;
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_ROOT_URL,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken;
            if (token) {
                headers.set("Authorization", `${token}`);
            } else if (localStorageToken) {
                headers.set("Authorization", `${localStorageToken}`);
            } else {
                headers.set("Authorization", ``);
            }

            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
