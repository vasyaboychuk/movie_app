import css from "../MovieListCard/MovieListCard.module.css";
import {Badge} from "@mui/material";
import StarRatings from "react-star-ratings/build/star-ratings";

function FavouriteMovies({movie}) {
    const {title, poster_path,vote_average,adult,original_language} = movie;
    return (
        <div className={css.Card}  >
            {adult && <Badge badgeContent={'+18'} color={"secondary"}/>}
            <Badge badgeContent={original_language} color={"error"}/>

            <div className={css.CardInfo}>

                <img className={css.photo} src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:`https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`} alt={title}/>

                <div className={css.info}>

                    <div className={css.name}>
                        <span >Name: {title}</span>
                    </div>
                    <div className={css.infoRating}>

                        <span >Rating: {vote_average}</span>
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
    )
}

export {FavouriteMovies};