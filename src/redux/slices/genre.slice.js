import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState={
    genres:[],
    genre:null
}


const getAll = createAsyncThunk(
    "genreSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);



const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre:(state,action)=>{
            state.genre=action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })



});




const {reducer: genreReducer, actions:{setGenre}} = genreSlice;

const genresActions = {
    getAll,
    setGenre

};

export {
    genresActions,
    genreReducer
};