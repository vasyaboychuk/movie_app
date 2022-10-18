import css from './MovieListCard.module.css'
import {useNavigate} from "react-router-dom";

function MovieListCard({movie}) {
    const {title,vote_avarage,poster_path,genre_ids,release_date,overview} = movie;

    const navigate = useNavigate();

    const setMovie=()=>{
        navigate(`${movie.id}`)

    }
    return (
        <div className={css.Card} onClick={setMovie}>
            <img  className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <div>
                <span>Name</span>
                <span>{title}</span>
            </div>
            <div>
                <span>Release date</span>
                <span>{release_date}</span>
            </div>
            <div>
                <span>About</span>
                <span>{overview}</span>
            </div>
        </div>
    );
}

export {MovieListCard};