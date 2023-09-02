import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMoviesnow_playing = createAsyncThunk('movies/fetchMoviesnow_playing', async () => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8'
  }
 };
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data = await response.json();
    return data.results;
})

const movieSlicenow_playing = createSlice({
    initialState: [],
    name: "movieSlicenow_playing",
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMoviesnow_playing.fulfilled, (state, action) => {
            // Add user to the state array
           return [...state , action.payload]
        })
    },

});


export default movieSlicenow_playing.reducer
