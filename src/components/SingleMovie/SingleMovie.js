import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

import {SingleMovieDetails} from "../SingleMovieDetails/SingleMovieDetails";
import css from './SingleMovie.module.css';
import {useEffect} from "react";


function SingleMovie(props) {
    const dispatch = useDispatch();


    const {currentMovie} = useSelector(state => state.movieReducer);
    const {id} = useParams();

    useEffect(()=>{
        dispatch(movieActions.getById({id}))
    },[id])


    return (
        <div className={css.currentMovie} >
            {currentMovie&&<SingleMovieDetails key={currentMovie.id} currentMovie={currentMovie}/>}

        </div>
    )
}

export {SingleMovie};