import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMoviesupcoming = createAsyncThunk('movies/fetchMoviesupcoming', async () => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8'
  }
 };
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const data = await response.json();
    return data.results;
})

const movieSliceupcoming = createSlice({
    initialState: [],
    name: "movieSliceupcoming",
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMoviesupcoming.fulfilled, (state, action) => {
            // Add user to the state array
           return [...state , action.payload]
        })
    },

});


export default movieSliceupcoming.reducer
