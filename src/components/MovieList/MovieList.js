import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'
import {ThemeContext} from "../../App";


function MovieList() {

    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);


    const {movies, currentPage} = useSelector(state => state.movieReducer);
    const {genre} = useSelector(state => state.genreReducer);


    useEffect(() => {
        dispatch(movieActions.getAllByPage({currentPage,genre}))

    }, [currentPage,genre]);



    return (
        <div className={css.wrap} data-theme={theme}>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>

    )
}

export {MovieList};