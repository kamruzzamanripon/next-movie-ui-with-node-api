import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categoryWiseMovies: builder.query({
            query: () =>
                `/category-wise-movies`,
               
        }),
    }),
});

export const { useCategoryWiseMoviesQuery} = categoryApi;
