import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topMovies: [],
    aiMovieData:{},
    sampleData:"sdfsf sdfsf"
    
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        topMovies: (state, action) => {
            state.topMovies = action.payload;
            
        },
        aiMovieData:(state, action) =>{
            console.log('redux movie')
            state.aiMovieData = action.payload;
        }
       
    },
});

export const { topMovies, aiMovieData} = movieSlice.actions;
export default movieSlice.reducer;
