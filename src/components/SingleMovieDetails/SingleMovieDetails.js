import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import css from './SingleMovieDetails.module.css';
import {Button} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../../App";

function SingleMovieDetails({currentMovie}) {
    const {title,original_language,original_title,overview,release_date,poster_path} = currentMovie;

    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);
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
                    {/*<button onClick={() => navigate(-1)}>back</button>*/}
                    {/*<ArrowBackIcon onClick={() => navigate(-1)} fontSize={"large"} color={"primary"}/>*/}
                    {/*{'back'}*/}
                    <Button variant="contained" onClick={() => navigate(-1)}>BACK</Button>
                </div>
            </div>


        </div>
    );
}

export {SingleMovieDetails};