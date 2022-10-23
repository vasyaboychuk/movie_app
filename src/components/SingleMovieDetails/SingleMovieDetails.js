import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";

import css from './SingleMovieDetails.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../App";
import {useLocalStorage} from "../../hooks/useLocalStorage";

function SingleMovieDetails({currentMovie}) {
    const {movies} = useSelector(state => state.movieReducer);
    const {title,original_language,original_title,overview,release_date,poster_path,id} = currentMovie;
    const [favourite, setFavourite] = useLocalStorage([], 'favourite');
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const addToFavourite=(id)=>{
        const newItem=movies.find(item=>item.id===id)
        setFavourite([...favourite,newItem])
    }
    return (
        <div className={css.container} data-theme={theme}>
            <div className={css.poster}>
                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            </div>
            <div className={css.info}>
                <div className={css.data}>
                    <span>Language: {original_language}</span>
                    <span>Name: {original_title}</span>
                    <span>About: {overview}</span>
                    <span>Release: {release_date}</span>
                </div>
                <div className={css.btn}>
                    <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
                    <Button color={"error"} variant="contained" onClick={()=>addToFavourite(id)}>Add to Favourite</Button>
                </div>


            </div>


        </div>
    );
}

export {SingleMovieDetails};