import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from '@mui/material'

import {genresActions} from "../../redux/slices/genre.slice";
import css from './Genres.module.css';

const Genres=()=> {
    const {genres,genre} = useSelector(state=>state.genreReducer);
    const dispatch = useDispatch();

    const handleCurrentGenre=(e)=>{
       dispatch(genresActions.setGenre(e))

    }

    useEffect(()=>{
        dispatch(genresActions.getAll());
    },[genres])

    return (
        <div className={css.genres}>
            { genres.genres?.map(genre=><Button onClick={()=>handleCurrentGenre(genre.id)} variant="outlined" color="inherit">{genre.name}</Button>)}
        </div>
    )
}

export {Genres};