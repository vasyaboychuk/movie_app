import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
};

const getAll = createAsyncThunk(
    "movieSlice/getAll",
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await movieService.getAll();
            return data
        }catch (e){
            return rejectWithValue(e.response.data)

        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies=action.payload.results
            })
});
const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    getAll
}

export {
    movieReducer,
    movieActions
}