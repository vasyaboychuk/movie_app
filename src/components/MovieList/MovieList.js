import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'

function MovieList() {

    const dispatch = useDispatch();


    const {movies, currentPage} = useSelector(state => state.movieReducer);
    const {genre} = useSelector(state => state.genreReducer);


    useEffect(() => {
        dispatch(movieActions.getAllByPage(currentPage))

    }, [currentPage]);

    return (
        <div className={css.wrap}>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>

    )
}

export {MovieList};