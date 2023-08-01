import { apiSlice } from "../api/apiSlice";

export const moviesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        topMovies: builder.query({
            query: () =>
                `/top-movies`,
        }),
        manualMovieStore: builder.mutation({
            query: (data) => ({
                url: "/movie-store",
                method: "POST",
                body: data,
            }),
        })
    }),
});

export const { useTopMoviesQuery, useManualMovieStoreMutation} = moviesApi;
