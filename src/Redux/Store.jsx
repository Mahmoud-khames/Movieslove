import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies-slice";
import TvSlice from "./tv-slice";
import movieSlicetop from "./movies-slice-top";
import movieSlicepopular from "./movies-slice-p";
import TvSlicepopular from "./tv-slice-popular";
import TvSlicetop from './tv-slice-top';
import movieSlicenow_playing from './movies-slice-Now';
import TvSlicetoday from './tv-slice-Today';
import TvSliceon_the_air from './tv-slice-airing';
import movieSliceupcoming from './movies-slice-Up';


export const store = configureStore({
    reducer:{
        moveSlice: moviesSlice,
        movietop: movieSlicetop,
        moviepopular: movieSlicepopular,
        tvpopular: TvSlicepopular,
        tvtop: TvSlicetop,
        tvon_the_air: TvSliceon_the_air,
        movienow_playing: movieSlicenow_playing,
        movienow_Tody: TvSlicetoday,
        movienow_upcoming: movieSliceupcoming,
        TvtopSlice: TvSlice,
    },
});