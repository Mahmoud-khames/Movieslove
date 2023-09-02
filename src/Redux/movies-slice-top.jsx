import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMoviestop = createAsyncThunk('movies/fetchMoviestop', async () => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8'
  }
 };
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    const data = await response.json();
    return data.results;
})

const movieSlicetop = createSlice({
    initialState: [],
    name: "movieSlicetop",
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMoviestop.fulfilled, (state, action) => {
            // Add user to the state array
           return [...state , action.payload]
        })
    },

});


export default movieSlicetop.reducer
