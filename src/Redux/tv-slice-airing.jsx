import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTvon_the_air = createAsyncThunk('Tv/fetchTvon_the_air', async () => {
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8'
  }
 };
    const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options);
    const data = await response.json();
    console.log(data);
    return data.results;
})

const TvSliceon_the_air = createSlice({
    initialState: [],
    name: "TvSliceon_the_air",
    reducers: {
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchTvon_the_air.fulfilled, (state, action) => {
            // Add user to the state array
           return [...state , action.payload]
        })
    },

});

export default TvSliceon_the_air.reducer;