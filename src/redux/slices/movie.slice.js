import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genreService, movieService} from "../../services";


const initialState = {
    currentPage: 1,
    totalPage: 0,
    movies: [],
    currentMovie: null,
    favouriteMovies:[]

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
    " genreSlice/getMovieByGenre",
    async (idGenre, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getWithSearch(idGenre);
            return data
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
            state.currentPage = action.payload
        },

    },
    extraReducers: builder =>
        builder
            .addCase(getAllByPage.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPage = action.payload.total_pages;
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
});


const {reducer: movieReducer, actions: {setCurrentPage}} = movieSlice;

const movieActions = {
    getAllByPage,
    getById,
    setCurrentPage,
    getBySearch,
    getMovieByGenre,


}

export {
    movieReducer,
    movieActions
}