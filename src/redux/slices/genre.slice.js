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
        getGenre: (state, action) => {
            state.genre = action.payload
        },
        setGenre:(state,action)=>{
            state.genres=action.payload
            // state.genres.push(action.payload)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })



});




const {reducer: genreReducer, actions:{getGenre,setGenre}} = genreSlice;

const genresActions = {
    getAll,
    getGenre,
    setGenre

};

export {
    genresActions,
    genreReducer
};