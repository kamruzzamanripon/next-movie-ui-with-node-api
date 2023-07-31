import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topMovies: [],
    
};

const categorySlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        topMovies: (state, action) => {
            state.topMovies = action.payload;
            
        }
       
    },
});

export const { topMovies} = categorySlice.actions;
export default categorySlice.reducer;
