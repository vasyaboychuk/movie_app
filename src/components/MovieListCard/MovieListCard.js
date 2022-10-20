import {useNavigate} from "react-router-dom";





import css from './MovieListCard.module.css'
import {Rating, Stack} from "@mui/material";

function MovieListCard({movie}) {
    const {title, poster_path, release_date,vote_average} = movie;


    const navigate = useNavigate();

    const setMovie = () => {
        navigate(`${movie.id}`)

    }
    return (
        <div className={css.Card} onClick={setMovie}>
            <div className={css.CardInfo}>
                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                <div className={css.info}>
                    <div className={css.name}>
                        <span>Name: {title}</span>

                    </div>

                    <div >
                        <span>Rating: {vote_average}</span>
                       <Stack  className={css.rating} spacing={1}>
                           <Rating name="half-rating" defaultValue={vote_average} precisions={0.5} readOnly max={10}/>
                       </Stack>
                    </div>

                </div>
            </div>
        </div>
    );
}

export {MovieListCard};