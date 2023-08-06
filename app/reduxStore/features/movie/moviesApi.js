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
        }),
        
        aiMovieStore: builder.mutation({
           
            query: (data) => ({
                
                url: "/ai-movie-store",
                method: "POST",
                body: data,
                
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
               console.log('redux', arg)
            },
        }),
        
    }),
});

export const { useTopMoviesQuery, useManualMovieStoreMutation, useAiMovieStoreMutation} = moviesApi;
