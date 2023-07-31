import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log('data fetch', result)
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.payload.token,
                            user:result.data.payload,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.payload.token,
                            user: result.data.payload,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
