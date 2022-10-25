import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {SingleMovieDetails} from "../SingleMovieDetails/SingleMovieDetails";
import css from './SingleMovie.module.css';


function SingleMovie(props) {
    const dispatch = useDispatch();


    const {currentMovie,loading,trailer} = useSelector(state => state.movieReducer);
    console.log(trailer);
    const {id} = useParams();

    useEffect(()=>{
        dispatch(movieActions.getById({id}))

    },[id])

    useEffect(()=>{
        dispatch(movieActions.getTrailerById({id}))
    },[id])




    return (
        <div className={css.currentMovie} >
            {loading&&<h1>Loading.....</h1>}
            {currentMovie&&<SingleMovieDetails key={currentMovie.id} currentMovie={currentMovie} trailerInfo={trailer}/>}

        </div>
    )
}

export {SingleMovie};