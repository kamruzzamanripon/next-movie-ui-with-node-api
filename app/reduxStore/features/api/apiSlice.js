'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Function to get the auth token from localStorage
function getAuthToken() {
  if (typeof window !== 'undefined') {
    const authData = JSON.parse(localStorage.getItem("auth"));
    return authData?.accessToken;
  }
  return undefined;
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_ROOT_URL,
        prepareHeaders: (headers, { getState }) => {
            // Use the token from the state if available, otherwise try to get it from localStorage
            const token = getState()?.auth?.accessToken || getAuthToken();

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
