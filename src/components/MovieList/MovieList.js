import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'

function MovieList() {
    const dispatch = useDispatch();

    const {movies} = useSelector(state=>state.movieReducer);

    useEffect(()=>{

        dispatch(movieActions.getAll())

    },[])

    return (
        <div className={css.wrap}>
            {movies.map(movie=><MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {MovieList};