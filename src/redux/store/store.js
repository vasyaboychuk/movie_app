import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "../slices";
import {genreReducer} from "../slices/genre.slice";

const rootReducer=combineReducers({
   movieReducer,
    genreReducer
})

const setupStore=()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}