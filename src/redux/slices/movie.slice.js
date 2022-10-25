import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genreService, movieService} from "../../services";


const initialState = {
    currentPage: 1,
    totalPage: 0,
    movies: [],
    currentMovie: null,
    favouriteMovies: [],
    loading: false,
    error:null,
    trailer:[]
};

const getAllByPage = createAsyncThunk(
    "movieSlice/getAllByPage",
    async (pageQuery, {rejectWithValue}) => {
        try {
            const{currentPage,genre}=pageQuery;
            const {data} = await movieService.getAllByPage(currentPage, genre);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
);

const getById = createAsyncThunk(
    "movieSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const getBySearch = createAsyncThunk(
    "movieSlice/getBySearch",
    async ({query}, {rejectWithValue}) => {
        try {

            const {data} = await movieService.searchMovie(query);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const getMovieByGenre = createAsyncThunk(
    " movieSlice/getMovieByGenre",
    async (idGenre, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getWithSearch(idGenre);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }
    }
);
const getTrailerById = createAsyncThunk(
    "movieSlice/getTrailerById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrailerById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFavouriteMovies:(state,action)=>{
            state.favouriteMovies = action.payload;
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAllByPage.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPage = action.payload.total_pages;
                state.loading=false
            })
            .addCase(getAllByPage.rejected,(state,action)=>{
                state.error=action.payload
                state.loading=false
            })
            .addCase(getAllByPage.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentMovie = action.payload
            })
            .addCase(getBySearch.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            .addCase(getMovieByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getTrailerById.fulfilled,(state,action)=>{
                state.trailer=action.payload.results
            })
});


const {reducer: movieReducer, actions: {setCurrentPage,setFavouriteMovies}} = movieSlice;

const movieActions = {
    getAllByPage,
    getById,
    setCurrentPage,
    setFavouriteMovies,
    getBySearch,
    getMovieByGenre,
    getTrailerById


}

export {
    movieReducer,
    movieActions
}