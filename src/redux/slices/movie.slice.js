import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    currentMovie:null
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

const getById = createAsyncThunk(
    "movieSlice/getById",
    async ({id},{rejectWithValue})=>{
        try{
            const {data} = await movieService.getById(id);
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
            .addCase(getById.fulfilled,(state,action)=>{
                state.currentMovie=action.payload
            })
});


const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    getAll,
    getById
}

export {
    movieReducer,
    movieActions
}