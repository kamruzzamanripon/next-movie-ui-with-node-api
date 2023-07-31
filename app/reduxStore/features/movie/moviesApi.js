import { apiSlice } from "../api/apiSlice";
import { topMovies } from "./movieSlice";

export const moviesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        topMovies: builder.query({
            query: () =>
                `/top-movies`,
                async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                    try {
                        const result = await queryFulfilled;
                        console.log('data fetch', result)
                            
                        dispatch(
                            topMovies(result)
                        );
                    } catch (err) {
                        // do nothing
                    }
                },
        }),
    }),
});

export const { useTopMoviesQuery} = moviesApi;
