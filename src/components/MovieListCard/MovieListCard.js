import {useNavigate} from "react-router-dom";
import {Badge} from "@mui/material";
import StarRatings from "react-star-ratings/build/star-ratings";

import css from './MovieListCard.module.css'


function MovieListCard({movie}) {
    const {title, poster_path,vote_average,adult,original_language} = movie;

    const navigate = useNavigate();

    const setMovie = () => {
        navigate(`${movie.id}`)

    }


    return (
        <div className={css.Card} onClick={setMovie}>
            {adult && <Badge badgeContent={'+18'} color={"secondary"}/>}
            <Badge badgeContent={original_language} color={"error"}/>

            <div className={css.CardInfo}>

                <img className={css.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>

                <div className={css.info}>

                    <div className={css.name}>
                        <span >Name: {title}</span>
                    </div>
                    <div className={css.infoRating}>

                        <span >Rating: {vote_average}</span>
                        {/*<Stack className={css.rating} spacing={2}>*/}
                        {/*    <Rating name="half-rating-read" defaultValue={vote_average} precisions={0.5} readOnly*/}
                        {/*            max={10}/>*/}
                        {/*</Stack>*/}
                        <StarRatings className={css.rating}
                                     rating={vote_average}
                                     starRatedColor="yellow"
                                     numberOfStars={10}
                                     name="rating"
                                     starDimension="15px"
                                     starSpacing="0px"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export {MovieListCard};