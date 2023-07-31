import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topMovies: [],
    
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        topMovies: (state, action) => {
            state.topMovies = action.payload;
            
        }
       
    },
});

export const { topMovies} = movieSlice.actions;
export default movieSlice.reducer;
