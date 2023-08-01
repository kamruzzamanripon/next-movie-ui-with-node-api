import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categoryWiseMovies: builder.query({
            query: () =>
                `/category-wise-movies`,
               
        }),
        allCategories: builder.query({
            query: () =>
                `/all-category`,
               
        }),
        categoryStore: builder.mutation({
            query: (data) => ({
                url: "/category-store",
                method: "POST",
                body: data,
            }),
        })
    }),
});

export const { useCategoryWiseMoviesQuery, useAllCategoriesQuery, useCategoryStoreMutation} = categoryApi;
