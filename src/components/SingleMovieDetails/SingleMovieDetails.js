import {useNavigate} from "react-router-dom";

import css from './SingleMovieDetails.module.css';

function SingleMovieDetails({currentMovie}) {
    const {title,original_language,original_title,overview,release_date,poster_path} = currentMovie;

    const navigate = useNavigate();
    return (
        <div className={css.container}>
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
                    <button onClick={() => navigate(-1)}>back</button>
                </div>
            </div>


        </div>
    );
}

export {SingleMovieDetails};